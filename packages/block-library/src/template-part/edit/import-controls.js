/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { useMemo, useState } from '@wordpress/element';
import { useDispatch, useSelect, useRegistry } from '@wordpress/data';
import {
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	SelectControl,
} from '@wordpress/components';
import { switchToBlockType } from '@wordpress/blocks';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { store as coreStore } from '@wordpress/core-data';
import { store as noticesStore } from '@wordpress/notices';

/**
 * Internal dependencies
 */
import { useCreateTemplatePartFromBlocks } from './utils/hooks';
import { transformWidgetToBlock } from './utils/transformers';

const WILDCARD_TRANSFORMS = [ 'core/columns', 'core/group' ];

export function TemplatePartImportControls( { area, setAttributes } ) {
	const [ selectedSidebar, setSelectedSidebar ] = useState( '' );
	const [ isBusy, setIsBusy ] = useState( false );

	const registry = useRegistry();
	const sidebars = useSelect( ( select ) => {
		return select( coreStore ).getSidebars( {
			per_page: -1,
			_fields: 'id,name,description,status,widgets',
		} );
	}, [] );
	const { getBlockTransformItems } = useSelect( blockEditorStore );
	const { createErrorNotice } = useDispatch( noticesStore );

	const createFromBlocks = useCreateTemplatePartFromBlocks(
		area,
		setAttributes
	);

	const options = useMemo( () => {
		const sidebarOptions = ( sidebars ?? [] )
			.filter( ( widgetArea ) => widgetArea.widgets.length > 0 )
			.map( ( widgetArea ) => {
				return {
					value: widgetArea.id,
					label: widgetArea.name,
				};
			} );

		if ( ! sidebarOptions.length ) {
			return [];
		}

		return [
			{ value: '', label: __( 'Select widget area' ) },
			...sidebarOptions,
		];
	}, [ sidebars ] );

	async function createFromWidgets( event ) {
		event.preventDefault();

		if ( isBusy || ! selectedSidebar ) {
			return;
		}

		setIsBusy( true );

		const sidebar = options.find(
			( { value } ) => value === selectedSidebar
		);
		const { getWidgets } = registry.resolveSelect( coreStore );

		// The widgets API always returns a successful response.
		const widgets = await getWidgets( {
			sidebar: sidebar.value,
			_embed: 'about',
		} );

		const skippedWidgets = new Set();
		const blocks = widgets.flatMap( ( widget ) => {
			const block = transformWidgetToBlock( widget );

			if ( block.name !== 'core/legacy-widget' ) {
				return block;
			}

			const transforms = getBlockTransformItems( block ).filter(
				( item ) => ! WILDCARD_TRANSFORMS.includes( item.name )
			);

			// Skip the block if we have no matching transformations.
			if ( ! transforms.length ) {
				skippedWidgets.add( widget.id_base );
				return [];
			}

			// Try transforming the Legacy Widget into a first matching block.
			return switchToBlockType( block, transforms[ 0 ].name );
		} );

		await createFromBlocks(
			blocks,
			/* translators: %s: name of the widget area */
			sprintf( __( 'Widget area: %s' ), sidebar.label )
		);

		if ( skippedWidgets.size ) {
			createErrorNotice(
				sprintf(
					/* translators: %s: the list of widgets */
					__( 'Unable to import the following widgets: %s.' ),
					Array.from( skippedWidgets ).join( ', ' )
				),
				{
					type: 'snackbar',
				}
			);
		}

		setIsBusy( false );
	}

	return (
		<Flex as="form" onSubmit={ createFromWidgets }>
			<FlexBlock>
				<SelectControl
					label={ __( 'Import widget area' ) }
					value={ selectedSidebar }
					options={ options }
					onChange={ ( value ) => setSelectedSidebar( value ) }
					disabled={ ! options.length }
					__next36pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</FlexBlock>
			<FlexItem
				style={ {
					marginBottom: '8px',
					marginTop: 'auto',
				} }
			>
				<Button
					variant="primary"
					type="submit"
					isBusy={ isBusy }
					aria-disabled={ isBusy || ! selectedSidebar }
				>
					{ __( 'Import' ) }
				</Button>
			</FlexItem>
		</Flex>
	);
}

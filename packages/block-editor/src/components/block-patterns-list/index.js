/**
 * WordPress dependencies
 */
import {
	VisuallyHidden,
	__unstableComposite as Composite,
	__unstableUseCompositeState as useCompositeState,
	__unstableCompositeItem as CompositeItem,
} from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import parsePattern from './parse-pattern';
import BlockPreview from '../block-preview';
import InserterDraggableBlocks from '../inserter-draggable-blocks';

function BlockPattern( { isDraggable, pattern, onClick, composite } ) {
	const { viewportWidth } = pattern;
	let { blocks } = pattern;
	// Fallback for patterns from Pattern Directory, that haven't been pre-parsed.
	if ( ! blocks ) {
		blocks = parsePattern( pattern );
	}
	const descriptionId = useInstanceId(
		BlockPattern,
		'block-editor-block-patterns-list__item-description'
	);
	return (
		<InserterDraggableBlocks
			isEnabled={ isDraggable }
			blocks={ blocks }
			isPattern={ !! pattern }
		>
			{ ( { draggable, onDragStart, onDragEnd } ) => (
				<div
					className="block-editor-block-patterns-list__list-item"
					draggable={ draggable }
					onDragStart={ onDragStart }
					onDragEnd={ onDragEnd }
				>
					<CompositeItem
						role="option"
						as="div"
						{ ...composite }
						className="block-editor-block-patterns-list__item"
						onClick={ () => onClick( pattern, blocks ) }
						aria-label={ pattern.title }
						aria-describedby={
							pattern.description ? descriptionId : undefined
						}
					>
						<BlockPreview
							blocks={ blocks }
							viewportWidth={ viewportWidth }
						/>
						<div className="block-editor-block-patterns-list__item-title">
							{ /* // TODO: decode titles from PD */ }
							{ pattern.title }
						</div>
						{ !! pattern.description && (
							<VisuallyHidden id={ descriptionId }>
								{ pattern.description }
							</VisuallyHidden>
						) }
					</CompositeItem>
				</div>
			) }
		</InserterDraggableBlocks>
	);
}

function BlockPatternPlaceholder() {
	return (
		<div className="block-editor-block-patterns-list__item is-placeholder" />
	);
}

function BlockPatternList( {
	isDraggable,
	blockPatterns,
	shownPatterns,
	onClickPattern,
	orientation,
	label = __( 'Block Patterns' ),
} ) {
	const composite = useCompositeState( { orientation } );
	return (
		<Composite
			{ ...composite }
			role="listbox"
			className="block-editor-block-patterns-list"
			aria-label={ label }
		>
			{ blockPatterns.map( ( pattern ) => {
				const isShown = shownPatterns.includes( pattern );
				return isShown ? (
					<BlockPattern
						key={ pattern.name || pattern.id } // TODO: This is a temporary fix to avoid a crash from PD.
						pattern={ pattern }
						onClick={ onClickPattern }
						isDraggable={ isDraggable }
						composite={ composite }
					/>
				) : (
					<BlockPatternPlaceholder
						key={ pattern.name || pattern.id }
					/>
				);
			} ) }
		</Composite>
	);
}

export default BlockPatternList;

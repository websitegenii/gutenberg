/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { forwardRef } from '@wordpress/element';
/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../../store';
import Inserter from '../inserter';

export const Appender = forwardRef( ( props, ref ) => {
	const { onInsertBlock, ...treeGridCellProps } = props;

	const { hideInserter, clientId } = useSelect( ( select ) => {
		const {
			getTemplateLock,
			__unstableGetEditorMode,
			getSelectedBlockClientId,
		} = select( blockEditorStore );

		const _clientId = getSelectedBlockClientId();

		return {
			clientId: getSelectedBlockClientId(),
			hideInserter:
				!! getTemplateLock( _clientId ) ||
				__unstableGetEditorMode() === 'zoom-out',
		};
	}, [] );

	const maybeSetInsertedBlockOnInsertion = ( _insertedBlock ) => {
		if ( ! _insertedBlock?.clientId ) {
			return;
		}

		onInsertBlock( _insertedBlock?.clientId );
	};

	if ( hideInserter ) {
		return null;
	}

	return (
		<div className="offcanvas-editor__appender">
			<Inserter
				ref={ ref }
				rootClientId={ clientId }
				position="bottom right"
				isAppender={ true }
				selectBlockOnInsert={ false }
				onSelectOrClose={ maybeSetInsertedBlockOnInsertion }
				__experimentalIsQuick
				{ ...treeGridCellProps }
			/>
		</div>
	);
} );

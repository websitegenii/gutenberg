/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import ScreenHeader from './header';
import BorderPanel, { useHasBorderPanel } from './border-panel';
import ShadowPanel, { useHasShadowControl } from './shadow-panel';

function ScreenBorder( { name } ) {
	const hasBorderPanel = useHasBorderPanel( name );
	const hasShadowPanel = useHasShadowControl( name );

	return (
		<>
			<ScreenHeader title={ __( 'Border & Shadow' ) } />
			{ hasBorderPanel && <BorderPanel name={ name } /> }
			{ hasShadowPanel && <ShadowPanel name={ name } /> }
		</>
	);
}

export default ScreenBorder;

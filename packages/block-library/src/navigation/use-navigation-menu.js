/**
 * WordPress dependencies
 */
import {
	store as coreStore,
	useResourcePermissions,
} from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import useNavigationEntityTypes from './use-navigation-entity-types';
import { isNumeric } from './edit/utils';

export default function useNavigationMenu( recordKey, navPostId ) {
	// Permissions can only be fetched by Post ID. As the Nav block
	// uses `slug` as the unique identifier attribute for a Navigation Post
	// permissions will only become available once the initial fetch of
	// the Navigation Menu Post has been issued. This is unavoidable.
	const permissions = useResourcePermissions( 'navigation', navPostId );

	const entityConfig = useNavigationEntityTypes( recordKey );

	return useSelect(
		( select ) => {
			const {
				canCreate,
				canUpdate,
				canDelete,
				isResolving,
				hasResolved,
			} = permissions;

			const {
				navigationMenus,
				isResolvingNavigationMenus,
				hasResolvedNavigationMenus,
			} = selectNavigationMenus( select, recordKey, entityConfig );

			const {
				navigationMenu,
				isNavigationMenuResolved,
				isNavigationMenuMissing,
			} = selectExistingMenu( select, recordKey, entityConfig );

			return {
				navigationMenus,
				isResolvingNavigationMenus,
				hasResolvedNavigationMenus,

				navigationMenu,
				isNavigationMenuResolved,
				isNavigationMenuMissing,

				canSwitchNavigationMenu: recordKey
					? navigationMenus?.length > 1
					: navigationMenus?.length > 0,

				canUserCreateNavigationMenu: canCreate,
				isResolvingCanUserCreateNavigationMenu: isResolving,
				hasResolvedCanUserCreateNavigationMenu: hasResolved,

				canUserUpdateNavigationMenu: canUpdate,
				hasResolvedCanUserUpdateNavigationMenu: recordKey
					? hasResolved
					: undefined,

				canUserDeleteNavigationMenu: canDelete,
				hasResolvedCanUserDeleteNavigationMenu: recordKey
					? hasResolved
					: undefined,
			};
		},
		[ recordKey, permissions ]
	);
}

function selectNavigationMenus( select, _recordKey, entityConfig ) {
	const { getEntityRecords, hasFinishedResolution, isResolving } =
		select( coreStore );

	const args = [ ...entityConfig, { per_page: -1, status: 'publish' } ];

	return {
		navigationMenus: getEntityRecords( ...args ),
		isResolvingNavigationMenus: isResolving( 'getEntityRecords', args ),
		hasResolvedNavigationMenus: hasFinishedResolution(
			'getEntityRecords',
			args
		),
	};
}

function selectExistingMenu( select, recordKey, entityConfig ) {
	if ( ! recordKey ) {
		return {
			isNavigationMenuResolved: false,
			isNavigationMenuMissing: true,
			navigationMenu: null,
		};
	}

	const { getEntityRecords, getEditedEntityRecord, hasFinishedResolution } =
		select( coreStore );

	const recordKeyQuery = isNumeric( recordKey )
		? {
				include: recordKey, // fetch by post id.
		  }
		: {
				slug: recordKey, // fetch by slug (post_name).
		  };

	// Find a **single** Navigation Menu using the appropriate
	// recordKey as the identifier (i.e. recordKey). This may be
	// either a slug or (for legacy blocks) as post ID.
	// This call to `getEntityRecords` **must** be distinct from the
	// call within the `selectNavigationMenus` (above) otherwise the
	// query will return only `published` menus.
	const navigationMenus = getEntityRecords( ...entityConfig, {
		...recordKeyQuery,
		per_page: 1, // only the 1 record is required.
		status: [ 'publish', 'draft' ], // required to distinguish from primary `getEntityRecords` call.
	} );

	const hasNavigationMenu = navigationMenus?.length;

	// `wp_navigation` entities are keyed by Post ID in state.
	// Perform subsequent lookups based on the ID of the record
	// returned by the slug-based query (if available).
	const idQueryArgs = hasNavigationMenu
		? [ ...entityConfig, navigationMenus[ 0 ]?.id ]
		: [];

	const editedNavigationMenu = hasNavigationMenu
		? getEditedEntityRecord( ...idQueryArgs )
		: null;

	const hasResolvedNavigationMenu = hasNavigationMenu
		? hasFinishedResolution( 'getEditedEntityRecord', idQueryArgs )
		: null;

	// Only published Navigation posts are considered valid.
	// Draft Navigation posts are valid only on the editor,
	// requiring a post update to publish to show in frontend.
	// To achieve that, index.php must reflect this validation only for published.
	const isNavigationMenuPublishedOrDraft =
		editedNavigationMenu?.status === 'publish' ||
		editedNavigationMenu?.status === 'draft';

	const rtn = {
		isNavigationMenuResolved: hasResolvedNavigationMenu,
		isNavigationMenuMissing:
			hasResolvedNavigationMenu &&
			( ! hasNavigationMenu || ! isNavigationMenuPublishedOrDraft ),

		// getEditedEntityRecord will return the post regardless of status.
		// Therefore if the found post is not published then we should ignore it.
		navigationMenu: isNavigationMenuPublishedOrDraft
			? editedNavigationMenu
			: null,
	};

	return rtn;
}

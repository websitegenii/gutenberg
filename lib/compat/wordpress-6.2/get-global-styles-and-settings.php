<?php
/**
 * API to interact with global settings & styles.
 *
 * @package gutenberg
 */

if ( ! function_exists( 'wp_theme_has_theme_json' ) ) {
	/**
	 * Whether a theme or its parent have a theme.json file.
	 *
	 * The result would be cached via the WP_Object_Cache.
	 * It can be cleared by calling wp_theme_has_theme_json_clean_cache().
	 *
	 * @return boolean
	 */
	function wp_theme_has_theme_json( $stylesheet = '' ) {
		$cache_group = 'theme_json';
		if ( empty( $stylesheet ) ) {
			$stylesheet = get_stylesheet();
		}
		$cache_key         = sprintf( 'wp_theme_has_theme_json_%s', $stylesheet );
		$theme_has_support = wp_cache_get( $cache_key, $cache_group );

		/**
		 * $theme_has_support is stored as an int in the cache.
		 *
		 * The reason not to store it as a boolean is to avoid working
		 * with the $found parameter which apparently had some issues in some implementations
		 * https://developer.wordpress.org/reference/functions/wp_cache_get/
		 *
		 * Ignore cache when `WP_DEBUG` is enabled, so it doesn't interfere with the theme developers workflow.
		 */
		if ( ! WP_DEBUG && is_int( $theme_has_support ) ) {
			return (bool) $theme_has_support;
		}

		$wp_theme = wp_get_theme( $stylesheet );
		if ( ! $wp_theme->exists() ) {
			return false;
		}

		// Has the own theme a theme.json?
		$theme_has_support = is_readable( $wp_theme->get_file_path( 'theme.json' ) ) ? 1 : 0;

		wp_cache_set( $cache_key, $theme_has_support, $cache_group );

		return (bool) $theme_has_support;
	}
}

if ( ! function_exists( 'wp_theme_has_theme_json_clean_cache' ) ) {
	/**
	 * Function to clean the cache used by wp_theme_has_theme_json method.
	 *
	 * @param string $stylesheet Directory name for the theme. Optional. Defaults to current theme.
	 */
	function wp_theme_has_theme_json_clean_cache( $stylesheet = '' ) {
		if ( empty( $stylesheet ) ) {
			$stylesheet = get_stylesheet();
		}
		$cache_key = sprintf( 'wp_theme_has_theme_json_%s', $stylesheet );
		wp_cache_delete( $cache_key, 'theme_json' );
	}
}

if ( ! function_exists( '_wp_theme_has_theme_json_clean_cache_switch_theme' ) ) {
	/**
	 * Clean new and old themes on switch.
	 *
	 * @param string  $new_name Name of the new theme.
	 * @param WP_Theme $new_theme WP_Theme instance of the new theme.
	 * @param WP_Theme $old_theme WP_Theme instance of the old theme.
	 */
	function _wp_theme_has_theme_json_clean_cache_switch_theme( $new_name, $new_theme, $old_theme ) {
		wp_theme_has_theme_json_clean_cache( $new_theme->get_stylesheet() );
		wp_theme_has_theme_json_clean_cache( $old_theme->get_stylesheet() );
	}
}

if ( ! function_exists( '_wp_theme_has_theme_json_clean_cache_start_previewing_theme' ) ) {
	/**
	 * Clear on preview.
	 *
	 * @param WP_Customize_Manager $manager WP_Customize_Manager instance.
	 */
	function _wp_theme_has_theme_json_clean_cache_start_previewing_theme( $manager ){
		wp_theme_has_theme_json_clean_cache( $manager->get_stylesheet() );
	}
}

if ( ! function_exists( '_wp_theme_has_theme_json_clean_cache_upon_upgrading_active_theme' ) ) {
	/**
	 * Private function to clean the cache used by wp_theme_has_theme_json method.
	 *
	 * It is hooked into the `upgrader_process_complete` action.
	 *
	 * @see default-filters.php
	 *
	 * @param WP_Upgrader $upgrader Instance of WP_Upgrader class.
	 * @param array       $options Metadata that identifies the data that is updated.
	 */
	function _wp_theme_has_theme_json_clean_cache_upon_upgrading_active_theme( $upgrader, $options ) {
		// The cache only needs cleaning when the active theme was updated.
		if ( 'update' === $options['action'] && 'theme' === $options['type'] && ! empty( $options['themes'] ) ) {
			foreach ( $options['themes'] as $theme ) {
				wp_theme_has_theme_json_clean_cache( $theme );
			}
		}
	}
}

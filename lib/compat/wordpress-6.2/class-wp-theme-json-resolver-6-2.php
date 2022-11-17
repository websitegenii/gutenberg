<?php
/**
 * WP_Theme_JSON_Resolver_6_1 class
 *
 * @package gutenberg
 */

/**
 * Class that abstracts the processing of the different data sources
 * for site-level config and offers an API to work with them.
 *
 * This class is for internal core usage and is not supposed to be used by extenders (plugins and/or themes).
 * This is a low-level API that may need to do breaking changes. Please,
 * use get_global_settings, get_global_styles, and get_global_stylesheet instead.
 *
 * @access private
 */
class WP_Theme_JSON_Resolver_6_2 extends WP_Theme_JSON_Resolver_6_1 {

	/**
	 * Determines whether the active theme has a theme.json file.
	 *
	 * @since 5.8.0
	 * @since 5.9.0 Added a check in the parent theme.
	 * @deprecated 6.2.0 Use wp_theme_has_theme_json() instead.
	 *
	 * @return bool
	 */
	public static function theme_has_support() {
		_deprecated_function( __METHOD__, '6.2.0', 'wp_theme_has_theme_json()' );

		return wp_theme_has_theme_json();
	}

	/**
	 * Builds the path to the given file and checks that it is readable.
	 *
	 * If it isn't, returns an empty string, otherwise returns the whole file path.
	 *
	 * @since 5.8.0
	 * @since 5.9.0 Adapted to work with child themes, added the `$template` argument.
	 * @deprecated 6.2.0 Use wp_get_theme()->get_file_path() instead.
	 *
	 * @param string $file_name Name of the file.
	 * @param bool   $template  Optional. Use template theme directory. Default false.
	 * @return string The whole file path or empty if the file doesn't exist.
	 */
	protected static function get_file_path_from_theme( $file_name, $template = false ) {
		_deprecated_function( __METHOD__, '6.2.0', 'wp_get_theme()->get_file_path()' );
		$theme = wp_get_theme();
		if ( $template && $theme->parent() ) {
			$theme = $theme->parent();
		}
		$candidate = $theme->get_file_path( $file_name );

		return is_readable( $candidate ) ? $candidate : '';
	}

	/**
	 * Returns the theme's data.
	 *
	 * Data from theme.json will be backfilled from existing
	 * theme supports, if any. Note that if the same data
	 * is present in theme.json and in theme supports,
	 * the theme.json takes precedence.
	 *
	 * @since 5.8.0
	 * @since 5.9.0 Theme supports have been inlined and the `$theme_support_data` argument removed.
	 * @since 6.0.0 Added an `$options` parameter to allow the theme data to be returned without theme supports.
	 *
	 * @param array $deprecated Deprecated. Not used.
	 * @param array $options {
	 *     Options arguments.
	 *
	 *     @type bool $with_supports Whether to include theme supports in the data. Default true.
	 * }
	 * @return WP_Theme_JSON Entity that holds theme data.
	 */
	public static function get_theme_data( $deprecated = array(), $options = array() ) {
		if ( ! empty( $deprecated ) ) {
			_deprecated_argument( __METHOD__, '5.9.0' );
		}

		$options = wp_parse_args( $options, array( 'with_supports' => true ) );

		if ( null === static::$theme || ! static::has_same_registered_blocks( 'theme' ) ) {
			$wp_theme        = wp_get_theme();
			$theme_json_file = $wp_theme->get_file_path( 'theme.json' );
			if ( is_readable( $theme_json_file ) ) {
				$theme_json_data = static::read_json_file( $theme_json_file );
				$theme_json_data = static::translate( $theme_json_data, $wp_theme->get( 'TextDomain' ) );
			} else {
				$theme_json_data = array();
			}

			/**
			 * Filters the data provided by the theme for global styles and settings.
			 *
			 * @since 6.1.0
			 *
			 * @param WP_Theme_JSON_Data Class to access and update the underlying data.
			 */
			$theme_json      = apply_filters( 'wp_theme_json_data_theme', new WP_Theme_JSON_Data( $theme_json_data, 'theme' ) );
			$theme_json_data = $theme_json->get_data();
			static::$theme   = new WP_Theme_JSON( $theme_json_data );

			if ( $wp_theme->parent() ) {
				// Get parent theme.json.
				$parent_theme_json_file = $wp_theme->parent()->get_file_path( 'theme.json' );
				if ( $theme_json_file !== $parent_theme_json_file && is_readable( $parent_theme_json_file ) ) {
					$parent_theme_json_data = static::read_json_file( $parent_theme_json_file );
					$parent_theme_json_data = static::translate( $parent_theme_json_data, $wp_theme->parent()->get( 'TextDomain' ) );
					$parent_theme           = new WP_Theme_JSON( $parent_theme_json_data );

					/*
					 * Merge the child theme.json into the parent theme.json.
					 * The child theme takes precedence over the parent.
					 */
					$parent_theme->merge( static::$theme );
					static::$theme = $parent_theme;
				}
			}
		}

		if ( ! $options['with_supports'] ) {
			return static::$theme;
		}

		/*
		 * We want the presets and settings declared in theme.json
		 * to override the ones declared via theme supports.
		 * So we take theme supports, transform it to theme.json shape
		 * and merge the static::$theme upon that.
		 */
		$theme_support_data = WP_Theme_JSON::get_from_editor_settings( get_default_block_editor_settings() );
		if ( ! wp_theme_has_theme_json() ) {
			if ( ! isset( $theme_support_data['settings']['color'] ) ) {
				$theme_support_data['settings']['color'] = array();
			}

			$default_palette = false;
			if ( current_theme_supports( 'default-color-palette' ) ) {
				$default_palette = true;
			}
			if ( ! isset( $theme_support_data['settings']['color']['palette'] ) ) {
				// If the theme does not have any palette, we still want to show the core one.
				$default_palette = true;
			}
			$theme_support_data['settings']['color']['defaultPalette'] = $default_palette;

			$default_gradients = false;
			if ( current_theme_supports( 'default-gradient-presets' ) ) {
				$default_gradients = true;
			}
			if ( ! isset( $theme_support_data['settings']['color']['gradients'] ) ) {
				// If the theme does not have any gradients, we still want to show the core ones.
				$default_gradients = true;
			}
			$theme_support_data['settings']['color']['defaultGradients'] = $default_gradients;

			// Classic themes without a theme.json don't support global duotone.
			$theme_support_data['settings']['color']['defaultDuotone'] = false;
		}
		$with_theme_supports = new WP_Theme_JSON( $theme_support_data );
		$with_theme_supports->merge( static::$theme );
		return $with_theme_supports;
	}

}

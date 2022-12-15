<?php
/**
 * WP_Theme_JSON_6_2 class
 *
 * @package gutenberg
 */

/**
 * Class that encapsulates the processing of structures that adhere to the theme.json spec.
 *
 * This class is for internal core usage and is not supposed to be used by extenders (plugins and/or themes).
 * This is a low-level API that may need to do breaking changes. Please,
 * use get_global_settings, get_global_styles, and get_global_stylesheet instead.
 *
 * @access private
 */
class WP_Theme_JSON_6_2 extends WP_Theme_JSON_6_1 {
	const APPEARANCE_TOOLS_OPT_INS = array(
		array( 'border', 'color' ),
		array( 'border', 'radius' ),
		array( 'border', 'style' ),
		array( 'border', 'width' ),
		array( 'color', 'link' ),
		array( 'dimensions', 'minHeight' ),
		array( 'spacing', 'blockGap' ),
		array( 'spacing', 'margin' ),
		array( 'spacing', 'padding' ),
		array( 'typography', 'lineHeight' ),
	);

	/**
	 * Metadata for style properties.
	 *
	 * Each element is a direct mapping from the CSS property name to the
	 * path to the value in theme.json & block attributes.
	 *
	 * @since 5.8.0
	 * @since 5.9.0 Added the `border-*`, `font-family`, `font-style`, `font-weight`,
	 *              `letter-spacing`, `margin-*`, `padding-*`, `--wp--style--block-gap`,
	 *              `text-decoration`, `text-transform`, and `filter` properties,
	 *              simplified the metadata structure.
	 * @since 6.1.0 Added the `border-*-color`, `border-*-width`, `border-*-style`,
	 *              `--wp--style--root--padding-*`, and `box-shadow` properties,
	 *              removed the `--wp--style--block-gap` property.
	 * @since 6.2.0 Added `min-height`.
	 * @var array
	 */
	const PROPERTIES_METADATA = array(
		'background'                        => array( 'color', 'gradient' ),
		'background-color'                  => array( 'color', 'background' ),
		'border-radius'                     => array( 'border', 'radius' ),
		'border-top-left-radius'            => array( 'border', 'radius', 'topLeft' ),
		'border-top-right-radius'           => array( 'border', 'radius', 'topRight' ),
		'border-bottom-left-radius'         => array( 'border', 'radius', 'bottomLeft' ),
		'border-bottom-right-radius'        => array( 'border', 'radius', 'bottomRight' ),
		'border-color'                      => array( 'border', 'color' ),
		'border-width'                      => array( 'border', 'width' ),
		'border-style'                      => array( 'border', 'style' ),
		'border-top-color'                  => array( 'border', 'top', 'color' ),
		'border-top-width'                  => array( 'border', 'top', 'width' ),
		'border-top-style'                  => array( 'border', 'top', 'style' ),
		'border-right-color'                => array( 'border', 'right', 'color' ),
		'border-right-width'                => array( 'border', 'right', 'width' ),
		'border-right-style'                => array( 'border', 'right', 'style' ),
		'border-bottom-color'               => array( 'border', 'bottom', 'color' ),
		'border-bottom-width'               => array( 'border', 'bottom', 'width' ),
		'border-bottom-style'               => array( 'border', 'bottom', 'style' ),
		'border-left-color'                 => array( 'border', 'left', 'color' ),
		'border-left-width'                 => array( 'border', 'left', 'width' ),
		'border-left-style'                 => array( 'border', 'left', 'style' ),
		'color'                             => array( 'color', 'text' ),
		'font-family'                       => array( 'typography', 'fontFamily' ),
		'font-size'                         => array( 'typography', 'fontSize' ),
		'font-style'                        => array( 'typography', 'fontStyle' ),
		'font-weight'                       => array( 'typography', 'fontWeight' ),
		'letter-spacing'                    => array( 'typography', 'letterSpacing' ),
		'line-height'                       => array( 'typography', 'lineHeight' ),
		'margin'                            => array( 'spacing', 'margin' ),
		'margin-top'                        => array( 'spacing', 'margin', 'top' ),
		'margin-right'                      => array( 'spacing', 'margin', 'right' ),
		'margin-bottom'                     => array( 'spacing', 'margin', 'bottom' ),
		'margin-left'                       => array( 'spacing', 'margin', 'left' ),
		'min-height'                        => array( 'dimensions', 'minHeight' ),
		'padding'                           => array( 'spacing', 'padding' ),
		'padding-top'                       => array( 'spacing', 'padding', 'top' ),
		'padding-right'                     => array( 'spacing', 'padding', 'right' ),
		'padding-bottom'                    => array( 'spacing', 'padding', 'bottom' ),
		'padding-left'                      => array( 'spacing', 'padding', 'left' ),
		'--wp--style--root--padding'        => array( 'spacing', 'padding' ),
		'--wp--style--root--padding-top'    => array( 'spacing', 'padding', 'top' ),
		'--wp--style--root--padding-right'  => array( 'spacing', 'padding', 'right' ),
		'--wp--style--root--padding-bottom' => array( 'spacing', 'padding', 'bottom' ),
		'--wp--style--root--padding-left'   => array( 'spacing', 'padding', 'left' ),
		'text-decoration'                   => array( 'typography', 'textDecoration' ),
		'text-transform'                    => array( 'typography', 'textTransform' ),
		'filter'                            => array( 'filter', 'duotone' ),
		'box-shadow'                        => array( 'shadow' ),
	);

	/**
	 * Indirect metadata for style properties that are not directly output.
	 *
	 * Each element is a direct mapping from a CSS property name to the
	 * path to the value in theme.json & block attributes.
	 *
	 * Indirect properties are not output directly by `compute_style_properties`,
	 * but are used elsewhere in the processing of global styles. The indirect
	 * property is used to validate whether or not a style value is allowed.
	 *
	 * @since 6.2.0
	 * @var array
	 */
	const INDIRECT_PROPERTIES_METADATA = array(
		'gap'        => array( 'spacing', 'blockGap' ),
		'column-gap' => array( 'spacing', 'blockGap', 'left' ),
		'row-gap'    => array( 'spacing', 'blockGap', 'top' ),
	);

	/**
	 * The valid properties under the settings key.
	 *
	 * @since 5.8.0 As `ALLOWED_SETTINGS`.
	 * @since 5.9.0 Renamed from `ALLOWED_SETTINGS` to `VALID_SETTINGS`,
	 *              added new properties for `border`, `color`, `spacing`,
	 *              and `typography`, and renamed others according to the new schema.
	 * @since 6.0.0 Added `color.defaultDuotone`.
	 * @since 6.1.0 Added `layout.definitions` and `useRootPaddingAwareAlignments`.
	 * @since 6.2.0 Added `dimensions.minHeight`.
	 * @var array
	 */
	const VALID_SETTINGS = array(
		'appearanceTools'               => null,
		'useRootPaddingAwareAlignments' => null,
		'border'                        => array(
			'color'  => null,
			'radius' => null,
			'style'  => null,
			'width'  => null,
		),
		'color'                         => array(
			'background'       => null,
			'custom'           => null,
			'customDuotone'    => null,
			'customGradient'   => null,
			'defaultDuotone'   => null,
			'defaultGradients' => null,
			'defaultPalette'   => null,
			'duotone'          => null,
			'gradients'        => null,
			'link'             => null,
			'palette'          => null,
			'text'             => null,
		),
		'custom'                        => null,
		'dimensions'                    => array(
			'minHeight' => null,
		),
		'layout'                        => array(
			'contentSize' => null,
			'definitions' => null,
			'wideSize'    => null,
		),
		'spacing'                       => array(
			'customSpacingSize' => null,
			'spacingSizes'      => null,
			'spacingScale'      => null,
			'blockGap'          => null,
			'margin'            => null,
			'padding'           => null,
			'units'             => null,
		),
		'typography'                    => array(
			'fluid'          => null,
			'customFontSize' => null,
			'dropCap'        => null,
			'fontFamilies'   => null,
			'fontSizes'      => null,
			'fontStyle'      => null,
			'fontWeight'     => null,
			'letterSpacing'  => null,
			'lineHeight'     => null,
			'textDecoration' => null,
			'textTransform'  => null,
		),
	);

	/**
	 * The valid properties under the styles key.
	 *
	 * @since 5.8.0 As `ALLOWED_STYLES`.
	 * @since 5.9.0 Renamed from `ALLOWED_STYLES` to `VALID_STYLES`,
	 *              added new properties for `border`, `filter`, `spacing`,
	 *              and `typography`.
	 * @since 6.1.0 Added new side properties for `border`,
	 *              added new property `shadow`,
	 *              updated `blockGap` to be allowed at any level.
	 * @since 6.2.0 Added new property `css`.
	 * @var array
	 */
	const VALID_STYLES = array(
		'border'     => array(
			'color'  => null,
			'radius' => null,
			'style'  => null,
			'width'  => null,
			'top'    => null,
			'right'  => null,
			'bottom' => null,
			'left'   => null,
		),
		'color'      => array(
			'background' => null,
			'gradient'   => null,
			'text'       => null,
		),
		'dimensions' => array(
			'minHeight' => null,
		),
		'filter'     => array(
			'duotone' => null,
		),
		'shadow'     => null,
		'spacing'    => array(
			'margin'   => null,
			'padding'  => null,
			'blockGap' => null,
		),
		'typography' => array(
			'fontFamily'     => null,
			'fontSize'       => null,
			'fontStyle'      => null,
			'fontWeight'     => null,
			'letterSpacing'  => null,
			'lineHeight'     => null,
			'textDecoration' => null,
			'textTransform'  => null,
		),
		'css'        => null,
	);

	/**
	 * Sanitizes the input according to the schemas.
	 *
	 * @since 5.8.0
	 * @since 5.9.0 Added the `$valid_block_names` and `$valid_element_name` parameters.
	 *
	 * @param array $input               Structure to sanitize.
	 * @param array $valid_block_names   List of valid block names.
	 * @param array $valid_element_names List of valid element names.
	 * @return array The sanitized output.
	 */
	protected static function sanitize( $input, $valid_block_names, $valid_element_names ) {

		$output = array();

		if ( ! is_array( $input ) ) {
			return $output;
		}

		// Preserve only the top most level keys.
		$output = array_intersect_key( $input, array_flip( static::VALID_TOP_LEVEL_KEYS ) );

		// Remove any rules that are annotated as "top" in VALID_STYLES constant.
		// Some styles are only meant to be available at the top-level (e.g.: blockGap),
		// hence, the schema for blocks & elements should not have them.
		$styles_non_top_level = static::VALID_STYLES;
		foreach ( array_keys( $styles_non_top_level ) as $section ) {
			if ( array_key_exists( $section, $styles_non_top_level ) && is_array( $styles_non_top_level[ $section ] ) ) {
				foreach ( array_keys( $styles_non_top_level[ $section ] ) as $prop ) {
					if ( 'top' === $styles_non_top_level[ $section ][ $prop ] ) {
						unset( $styles_non_top_level[ $section ][ $prop ] );
					}
				}
			}
		}

		// Build the schema based on valid block & element names.
		$schema                 = array();
		$schema_styles_elements = array();

		// Set allowed element pseudo selectors based on per element allow list.
		// Target data structure in schema:
		// e.g.
		// - top level elements: `$schema['styles']['elements']['link'][':hover']`.
		// - block level elements: `$schema['styles']['blocks']['core/button']['elements']['link'][':hover']`.
		foreach ( $valid_element_names as $element ) {
			$schema_styles_elements[ $element ] = $styles_non_top_level;

			if ( array_key_exists( $element, static::VALID_ELEMENT_PSEUDO_SELECTORS ) ) {
				foreach ( static::VALID_ELEMENT_PSEUDO_SELECTORS[ $element ] as $pseudo_selector ) {
					$schema_styles_elements[ $element ][ $pseudo_selector ] = $styles_non_top_level;
				}
			}
		}

		$schema_styles_blocks   = array();
		$schema_settings_blocks = array();
		foreach ( $valid_block_names as $block ) {
			// Blocks can have multiple style variations, so we need to build the schema for each one.
			$style_variation_names    = isset( $input['styles']['blocks'][ $block ]['variations'] ) ? array_keys( $input['styles']['blocks'][ $block ]['variations'] ) : array();
			$schema_styles_variations = array();
			if ( ! empty( $style_variation_names ) ) {
				$schema_styles_variations = array_fill_keys( $style_variation_names, $styles_non_top_level );
			}

			$schema_settings_blocks[ $block ]             = static::VALID_SETTINGS;
			$schema_styles_blocks[ $block ]               = $styles_non_top_level;
			$schema_styles_blocks[ $block ]['elements']   = $schema_styles_elements;
			$schema_styles_blocks[ $block ]['variations'] = $schema_styles_variations;
		}

		$schema['styles']             = static::VALID_STYLES;
		$schema['styles']['blocks']   = $schema_styles_blocks;
		$schema['styles']['elements'] = $schema_styles_elements;
		$schema['settings']           = static::VALID_SETTINGS;
		$schema['settings']['blocks'] = $schema_settings_blocks;

		// Remove anything that's not present in the schema.
		foreach ( array( 'styles', 'settings' ) as $subtree ) {
			if ( ! isset( $input[ $subtree ] ) ) {
				continue;
			}

			if ( ! is_array( $input[ $subtree ] ) ) {
				unset( $output[ $subtree ] );
				continue;
			}

			$result = static::remove_keys_not_in_schema( $input[ $subtree ], $schema[ $subtree ] );

			if ( empty( $result ) ) {
				unset( $output[ $subtree ] );
			} else {
				$output[ $subtree ] = $result;
			}
		}

		return $output;
	}

	/**
	 * Processes a style node and returns the same node
	 * without the insecure styles.
	 *
	 * @since 5.9.0
	 * @since 6.2.0 Allow indirect properties used outside of `compute_style_properties`.
	 *
	 * @param array $input Node to process.
	 * @return array
	 */
	protected static function remove_insecure_styles( $input ) {
		$output       = array();
		$declarations = static::compute_style_properties( $input );

		foreach ( $declarations as $declaration ) {
			if ( static::is_safe_css_declaration( $declaration['name'], $declaration['value'] ) ) {
				$path = static::PROPERTIES_METADATA[ $declaration['name'] ];

				// Check the value isn't an array before adding so as to not
				// double up shorthand and longhand styles.
				$value = _wp_array_get( $input, $path, array() );
				if ( ! is_array( $value ) ) {
					_wp_array_set( $output, $path, $value );
				}
			}
		}

		// Ensure indirect properties not handled by `compute_style_properties` are allowed.
		foreach ( static::INDIRECT_PROPERTIES_METADATA as $property => $path ) {
			$value = _wp_array_get( $input, $path, array() );
			if (
				isset( $value ) &&
				! is_array( $value ) &&
				static::is_safe_css_declaration( $property, $value )
			) {
				_wp_array_set( $output, $path, $value );
			}
		}

		return $output;
	}

	/**
	 * Returns the metadata for each block.
	 *
	 * Example:
	 *
	 *     {
	 *       'core/paragraph': {
	 *         'selector': 'p',
	 *         'elements': {
	 *           'link' => 'link selector',
	 *           'etc'  => 'element selector'
	 *         }
	 *       },
	 *       'core/heading': {
	 *         'selector': 'h1',
	 *         'elements': {}
	 *       },
	 *       'core/image': {
	 *         'selector': '.wp-block-image',
	 *         'duotone': 'img',
	 *         'elements': {}
	 *       }
	 *     }
	 *
	 * @return array Block metadata.
	 */
	protected static function get_blocks_metadata() {
		if ( null !== static::$blocks_metadata ) {
			return static::$blocks_metadata;
		}

		static::$blocks_metadata = array();

		$registry = WP_Block_Type_Registry::get_instance();
		$blocks   = $registry->get_all_registered();
		foreach ( $blocks as $block_name => $block_type ) {
			if (
				isset( $block_type->supports['__experimentalSelector'] ) &&
				is_string( $block_type->supports['__experimentalSelector'] )
			) {
				static::$blocks_metadata[ $block_name ]['selector'] = $block_type->supports['__experimentalSelector'];
			} else {
				static::$blocks_metadata[ $block_name ]['selector'] = '.wp-block-' . str_replace( '/', '-', str_replace( 'core/', '', $block_name ) );
			}

			if (
				isset( $block_type->supports['color']['__experimentalDuotone'] ) &&
				is_string( $block_type->supports['color']['__experimentalDuotone'] )
			) {
				static::$blocks_metadata[ $block_name ]['duotone'] = $block_type->supports['color']['__experimentalDuotone'];
			}

			// Generate block support feature level selectors if opted into
			// for the current block.
			$features = array();
			foreach ( static::BLOCK_SUPPORT_FEATURE_LEVEL_SELECTORS as $key => $feature ) {
				if (
					isset( $block_type->supports[ $key ]['__experimentalSelector'] ) &&
					$block_type->supports[ $key ]['__experimentalSelector']
				) {
					$features[ $feature ] = static::scope_selector(
						static::$blocks_metadata[ $block_name ]['selector'],
						$block_type->supports[ $key ]['__experimentalSelector']
					);
				}
			}

			if ( ! empty( $features ) ) {
				static::$blocks_metadata[ $block_name ]['features'] = $features;
			}

			// Assign defaults, then override those that the block sets by itself.
			// If the block selector is compounded, will append the element to each
			// individual block selector.
			$block_selectors = explode( ',', static::$blocks_metadata[ $block_name ]['selector'] );
			foreach ( static::ELEMENTS as $el_name => $el_selector ) {
				$element_selector = array();
				foreach ( $block_selectors as $selector ) {
					if ( $selector === $el_selector ) {
						$element_selector = array( $el_selector );
						break;
					}
					$element_selector[] = static::append_to_selector( $el_selector, $selector . ' ', 'left' );
				}
				static::$blocks_metadata[ $block_name ]['elements'][ $el_name ] = implode( ',', $element_selector );
			}

			// If the block has style variations, append their selectors to the block metadata.
			if ( ! empty( $block_type->styles ) ) {
				$style_selectors = array();
				foreach ( $block_type->styles as $style ) {
					$style_selectors[ $style['name'] ] = static::append_to_selector( '.is-style-' . $style['name'], static::$blocks_metadata[ $block_name ]['selector'] );
				}
				static::$blocks_metadata[ $block_name ]['styleVariations'] = $style_selectors;
			}
		}
		return static::$blocks_metadata;
	}


	/**
	 * Builds metadata for the style nodes, which returns in the form of:
	 *
	 *     [
	 *       [
	 *         'path'     => [ 'path', 'to', 'some', 'node' ],
	 *         'selector' => 'CSS selector for some node',
	 *         'duotone'  => 'CSS selector for duotone for some node'
	 *       ],
	 *       [
	 *         'path'     => ['path', 'to', 'other', 'node' ],
	 *         'selector' => 'CSS selector for other node',
	 *         'duotone'  => null
	 *       ],
	 *     ]
	 *
	 * @since 5.8.0
	 *
	 * @param array $theme_json The tree to extract style nodes from.
	 * @param array $selectors  List of selectors per block.
	 * @return array
	 */
	protected static function get_style_nodes( $theme_json, $selectors = array() ) {
		$nodes = array();
		if ( ! isset( $theme_json['styles'] ) ) {
			return $nodes;
		}

		// Top-level.
		$nodes[] = array(
			'path'     => array( 'styles' ),
			'selector' => static::ROOT_BLOCK_SELECTOR,
		);

		if ( isset( $theme_json['styles']['elements'] ) ) {
			foreach ( self::ELEMENTS as $element => $selector ) {
				if ( ! isset( $theme_json['styles']['elements'][ $element ] ) || ! array_key_exists( $element, static::ELEMENTS ) ) {
					continue;
				}

				// Handle element defaults.
				$nodes[] = array(
					'path'     => array( 'styles', 'elements', $element ),
					'selector' => static::ELEMENTS[ $element ],
				);

				// Handle any pseudo selectors for the element.
				if ( array_key_exists( $element, static::VALID_ELEMENT_PSEUDO_SELECTORS ) ) {
					foreach ( static::VALID_ELEMENT_PSEUDO_SELECTORS[ $element ] as $pseudo_selector ) {

						if ( isset( $theme_json['styles']['elements'][ $element ][ $pseudo_selector ] ) ) {

							$nodes[] = array(
								'path'     => array( 'styles', 'elements', $element ),
								'selector' => static::append_to_selector( static::ELEMENTS[ $element ], $pseudo_selector ),
							);
						}
					}
				}
			}
		}

		// Blocks.
		if ( ! isset( $theme_json['styles']['blocks'] ) ) {
			return $nodes;
		}

		$nodes = array_merge( $nodes, static::get_block_nodes( $theme_json, $selectors ) );

		// This filter allows us to modify the output of WP_Theme_JSON so that we can do things like loading block CSS independently.
		return apply_filters( 'wp_theme_json_get_style_nodes', $nodes );
	}

	/**
	 * A public helper to get the block nodes from a theme.json file.
	 *
	 * @return array The block nodes in theme.json.
	 */
	public function get_styles_block_nodes() {
		return static::get_block_nodes( $this->theme_json );
	}

	/**
	 * An internal method to get the block nodes from a theme.json file.
	 *
	 * @param array $theme_json The theme.json converted to an array.
	 * @param array $selectors  Optional list of selectors per block.
	 *
	 * @return array The block nodes in theme.json.
	 */
	private static function get_block_nodes( $theme_json, $selectors = array() ) {
		$selectors = empty( $selectors ) ? static::get_blocks_metadata() : $selectors;
		$nodes     = array();
		if ( ! isset( $theme_json['styles'] ) ) {
			return $nodes;
		}

		// Blocks.
		if ( ! isset( $theme_json['styles']['blocks'] ) ) {
			return $nodes;
		}

		foreach ( $theme_json['styles']['blocks'] as $name => $node ) {

			$selector = null;
			if ( isset( $selectors[ $name ]['selector'] ) ) {
				$selector = $selectors[ $name ]['selector'];
			}

			$duotone_selector = null;
			if ( isset( $selectors[ $name ]['duotone'] ) ) {
				$duotone_selector = $selectors[ $name ]['duotone'];
			}

			$feature_selectors = null;
			if ( isset( $selectors[ $name ]['features'] ) ) {
				$feature_selectors = $selectors[ $name ]['features'];
			}

			$variation_selectors = array();
			if ( isset( $node['variations'] ) ) {
				foreach ( $node['variations'] as $variation => $node ) {
					$variation_selectors[] = array(
						'path'     => array( 'styles', 'blocks', $name, 'variations', $variation ),
						'selector' => $selectors[ $name ]['styleVariations'][ $variation ],
					);
				}
			}

			$nodes[] = array(
				'name'       => $name,
				'path'       => array( 'styles', 'blocks', $name ),
				'selector'   => $selector,
				'duotone'    => $duotone_selector,
				'features'   => $feature_selectors,
				'variations' => $variation_selectors,
			);

			if ( isset( $theme_json['styles']['blocks'][ $name ]['elements'] ) ) {
				foreach ( $theme_json['styles']['blocks'][ $name ]['elements'] as $element => $node ) {
					$nodes[] = array(
						'path'     => array( 'styles', 'blocks', $name, 'elements', $element ),
						'selector' => $selectors[ $name ]['elements'][ $element ],
					);

					// Handle any pseudo selectors for the element.
					if ( array_key_exists( $element, static::VALID_ELEMENT_PSEUDO_SELECTORS ) ) {
						foreach ( static::VALID_ELEMENT_PSEUDO_SELECTORS[ $element ] as $pseudo_selector ) {
							if ( isset( $theme_json['styles']['blocks'][ $name ]['elements'][ $element ][ $pseudo_selector ] ) ) {

								$nodes[] = array(
									'path'     => array( 'styles', 'blocks', $name, 'elements', $element ),
									'selector' => static::append_to_selector( $selectors[ $name ]['elements'][ $element ], $pseudo_selector ),
								);
							}
						}
					}
				}
			}
		}

		return $nodes;
	}

	/**
	 * Returns the stylesheet that results of processing
	 * the theme.json structure this object represents.
	 *
	 * @param array $types    Types of styles to load. Will load all by default. It accepts:
	 *                         'variables': only the CSS Custom Properties for presets & custom ones.
	 *                         'styles': only the styles section in theme.json.
	 *                         'presets': only the classes for the presets.
	 *                         'custom-css': only the css from global styles.css.
	 * @param array $origins A list of origins to include. By default it includes VALID_ORIGINS.
	 * @param array $options An array of options for now used for internal purposes only (may change without notice).
	 *                       The options currently supported are 'scope' that makes sure all style are scoped to a given selector,
	 *                       and root_selector which overwrites and forces a given selector to be used on the root node.
	 * @return string Stylesheet.
	 */
	public function get_stylesheet( $types = array( 'variables', 'styles', 'presets' ), $origins = null, $options = array() ) {
		if ( null === $origins ) {
			$origins = static::VALID_ORIGINS;
		}

		if ( is_string( $types ) ) {
			// Dispatch error and map old arguments to new ones.
			_deprecated_argument( __FUNCTION__, '5.9' );
			if ( 'block_styles' === $types ) {
				$types = array( 'styles', 'presets' );
			} elseif ( 'css_variables' === $types ) {
				$types = array( 'variables' );
			} else {
				$types = array( 'variables', 'styles', 'presets' );
			}
		}

		$blocks_metadata = static::get_blocks_metadata();
		$style_nodes     = static::get_style_nodes( $this->theme_json, $blocks_metadata );
		$setting_nodes   = static::get_setting_nodes( $this->theme_json, $blocks_metadata );

		$root_style_key    = array_search( static::ROOT_BLOCK_SELECTOR, array_column( $style_nodes, 'selector' ), true );
		$root_settings_key = array_search( static::ROOT_BLOCK_SELECTOR, array_column( $setting_nodes, 'selector' ), true );

		if ( ! empty( $options['scope'] ) ) {
			foreach ( $setting_nodes as &$node ) {
				$node['selector'] = static::scope_selector( $options['scope'], $node['selector'] );
			}
			foreach ( $style_nodes as &$node ) {
				$node['selector'] = static::scope_selector( $options['scope'], $node['selector'] );
			}
		}

		if ( ! empty( $options['root_selector'] ) ) {
			if ( false !== $root_settings_key ) {
				$setting_nodes[ $root_settings_key ]['selector'] = $options['root_selector'];
			}
			if ( false !== $root_style_key ) {
				$setting_nodes[ $root_style_key ]['selector'] = $options['root_selector'];
			}
		}

		$stylesheet = '';

		if ( in_array( 'variables', $types, true ) ) {
			$stylesheet .= $this->get_css_variables( $setting_nodes, $origins );
		}

		if ( in_array( 'styles', $types, true ) ) {
			if ( false !== $root_style_key ) {
				$stylesheet .= $this->get_root_layout_rules( $style_nodes[ $root_style_key ]['selector'], $style_nodes[ $root_style_key ] );
			}
			$stylesheet .= $this->get_block_classes( $style_nodes );
		} elseif ( in_array( 'base-layout-styles', $types, true ) ) {
			$root_selector    = static::ROOT_BLOCK_SELECTOR;
			$columns_selector = '.wp-block-columns';
			if ( ! empty( $options['scope'] ) ) {
				$root_selector    = static::scope_selector( $options['scope'], $root_selector );
				$columns_selector = static::scope_selector( $options['scope'], $columns_selector );
			}
			if ( ! empty( $options['root_selector'] ) ) {
				$root_selector = $options['root_selector'];
			}
			// Base layout styles are provided as part of `styles`, so only output separately if explicitly requested.
			// For backwards compatibility, the Columns block is explicitly included, to support a different default gap value.
			$base_styles_nodes = array(
				array(
					'path'     => array( 'styles' ),
					'selector' => $root_selector,
				),
				array(
					'path'     => array( 'styles', 'blocks', 'core/columns' ),
					'selector' => $columns_selector,
					'name'     => 'core/columns',
				),
			);

			foreach ( $base_styles_nodes as $base_style_node ) {
				$stylesheet .= $this->get_layout_styles( $base_style_node );
			}
		}

		if ( in_array( 'presets', $types, true ) ) {
			$stylesheet .= $this->get_preset_classes( $setting_nodes, $origins );
		}

		// Load the custom CSS last so it has the highest specificity.
		if ( in_array( 'custom-css', $types, true ) ) {
			$stylesheet .= _wp_array_get( $this->theme_json, array( 'styles', 'css' ) );
		}

		return $stylesheet;
	}

		/**
		 * Gets the CSS rules for a particular block from theme.json.
		 *
		 * @param array $block_metadata Metadata about the block to get styles for.
		 *
		 * @return string Styles for the block.
		 */
	public function get_styles_for_block( $block_metadata ) {
		$node             = _wp_array_get( $this->theme_json, $block_metadata['path'], array() );
		$use_root_padding = isset( $this->theme_json['settings']['useRootPaddingAwareAlignments'] ) && true === $this->theme_json['settings']['useRootPaddingAwareAlignments'];
		$selector         = $block_metadata['selector'];
		$settings         = _wp_array_get( $this->theme_json, array( 'settings' ) );

		// Process style declarations for block support features the current
		// block contains selectors for. Values for a feature with a custom
		// selector are filtered from the theme.json node before it is
		// processed as normal.
		$feature_declarations = array();

		if ( ! empty( $block_metadata['features'] ) ) {
			foreach ( $block_metadata['features'] as $feature_name => $feature_selector ) {
				if ( ! empty( $node[ $feature_name ] ) ) {
					// Create temporary node containing only the feature data
					// to leverage existing `compute_style_properties` function.
					$feature = array( $feature_name => $node[ $feature_name ] );
					// Generate the feature's declarations only.
					$new_feature_declarations = static::compute_style_properties( $feature, $settings, null, $this->theme_json );

					// Merge new declarations with any that already exist for
					// the feature selector. This may occur when multiple block
					// support features use the same custom selector.
					if ( isset( $feature_declarations[ $feature_selector ] ) ) {
						$feature_declarations[ $feature_selector ] = array_merge( $feature_declarations[ $feature_selector ], $new_feature_declarations );
					} else {
						$feature_declarations[ $feature_selector ] = $new_feature_declarations;
					}

					// Remove the feature from the block's node now the
					// styles will be included under the feature level selector.
					unset( $node[ $feature_name ] );
				}
			}
		}

		// If there are style variations, generate the selectors for them, including any feature selectors.
		$style_variation_declarations = array();
		if ( ! empty( $block_metadata['variations'] ) ) {
			foreach ( $block_metadata['variations'] as $style_variation ) {
				$style_variation_node     = _wp_array_get( $this->theme_json, $style_variation['path'], array() );
				$style_variation_selector = $style_variation['selector'];

				if ( ! empty( $block_metadata['features'] ) ) {
					foreach ( $block_metadata['features'] as $feature_name => $feature_selector ) {
						if ( ! empty( $style_variation_node[ $feature_name ] ) ) {
							// Prepend the variation selector to the feature selector.
							$split_feature_selectors    = explode( ',', $feature_selector );
							$feature_selectors          = array_map(
								function( $split_feature_selector ) use ( $style_variation_selector ) {
									return trim( $style_variation_selector ) . trim( $split_feature_selector );
								},
								$split_feature_selectors
							);
							$combined_feature_selectors = implode( ',', $feature_selectors );

							// Compute declarations for the feature.
							$new_feature_declarations = static::compute_style_properties( array( $feature_name => $style_variation_node[ $feature_name ] ), $settings, null, $this->theme_json );

							// Merge new declarations with any that already exist for
							// the feature selector. This may occur when multiple block
							// support features use the same custom selector.
							if ( isset( $style_variation_declarations[ $combined_feature_selectors ] ) ) {
								$style_variation_declarations[ $combined_feature_selectors ] = array_merge( $style_variation_declarations[ $combined_feature_selectors ], $new_feature_declarations );
							} else {
								$style_variation_declarations[ $combined_feature_selectors ] = $new_feature_declarations;
							}
							// Remove the feature from the block's node now the
							// styles will be included under the feature level selector.
							unset( $style_variation_node[ $feature_name ] );
						}
					}
				}
				$style_variation_declarations[ $style_variation_selector ] = static::compute_style_properties( $style_variation_node, $settings, null, $this->theme_json );
			}
		}

		// Get a reference to element name from path.
		// $block_metadata['path'] = array('styles','elements','link');
		// Make sure that $block_metadata['path'] describes an element node, like ['styles', 'element', 'link'].
		// Skip non-element paths like just ['styles'].
		$is_processing_element = in_array( 'elements', $block_metadata['path'], true );

		$current_element = $is_processing_element ? $block_metadata['path'][ count( $block_metadata['path'] ) - 1 ] : null;

		$element_pseudo_allowed = array_key_exists( $current_element, static::VALID_ELEMENT_PSEUDO_SELECTORS ) ? static::VALID_ELEMENT_PSEUDO_SELECTORS[ $current_element ] : array();

		// Check for allowed pseudo classes (e.g. ":hover") from the $selector ("a:hover").
		// This also resets the array keys.
		$pseudo_matches = array_values(
			array_filter(
				$element_pseudo_allowed,
				function( $pseudo_selector ) use ( $selector ) {
					return str_contains( $selector, $pseudo_selector );
				}
			)
		);

		$pseudo_selector = isset( $pseudo_matches[0] ) ? $pseudo_matches[0] : null;

		// If the current selector is a pseudo selector that's defined in the allow list for the current
		// element then compute the style properties for it.
		// Otherwise just compute the styles for the default selector as normal.
		if ( $pseudo_selector && isset( $node[ $pseudo_selector ] ) && array_key_exists( $current_element, static::VALID_ELEMENT_PSEUDO_SELECTORS ) && in_array( $pseudo_selector, static::VALID_ELEMENT_PSEUDO_SELECTORS[ $current_element ], true ) ) {
			$declarations = static::compute_style_properties( $node[ $pseudo_selector ], $settings, null, $this->theme_json, $selector, $use_root_padding );
		} else {
			$declarations = static::compute_style_properties( $node, $settings, null, $this->theme_json, $selector, $use_root_padding );
		}

		$block_rules = '';

		// 1. Separate the ones who use the general selector
		// and the ones who use the duotone selector.
		$declarations_duotone = array();
		foreach ( $declarations as $index => $declaration ) {
			if ( 'filter' === $declaration['name'] ) {
				unset( $declarations[ $index ] );
				$declarations_duotone[] = $declaration;
			}
		}

		// Update declarations if there are separators with only background color defined.
		if ( '.wp-block-separator' === $selector ) {
			$declarations = static::update_separator_declarations( $declarations );
		}

		// 2. Generate and append the rules that use the general selector.
		$block_rules .= static::to_ruleset( $selector, $declarations );

		// 3. Generate and append the rules that use the duotone selector.
		if ( isset( $block_metadata['duotone'] ) && ! empty( $declarations_duotone ) ) {
			$selector_duotone = static::scope_selector( $block_metadata['selector'], $block_metadata['duotone'] );
			$block_rules     .= static::to_ruleset( $selector_duotone, $declarations_duotone );
		}

		// 4. Generate Layout block gap styles.
		if (
			static::ROOT_BLOCK_SELECTOR !== $selector &&
			! empty( $block_metadata['name'] )
		) {
			$block_rules .= $this->get_layout_styles( $block_metadata );
		}

		// 5. Generate and append the feature level rulesets.
		foreach ( $feature_declarations as $feature_selector => $individual_feature_declarations ) {
			$block_rules .= static::to_ruleset( $feature_selector, $individual_feature_declarations );
		}

		// 6. Generate and append the style variation rulesets.
		foreach ( $style_variation_declarations as $style_variation_selector => $individual_style_variation_declarations ) {
			$block_rules .= static::to_ruleset( $style_variation_selector, $individual_style_variation_declarations );
		}

		return $block_rules;
	}

	/**
	 * Converts each style section into a list of rulesets
	 * containing the block styles to be appended to the stylesheet.
	 *
	 * See glossary at https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax
	 *
	 * For each section this creates a new ruleset such as:
	 *
	 *   block-selector {
	 *     style-property-one: value;
	 *   }
	 *
	 * @param array $style_nodes Nodes with styles.
	 * @return string The new stylesheet.
	 */
	protected function get_block_classes( $style_nodes ) {
		$block_rules = '';

		foreach ( $style_nodes as $metadata ) {
			if ( null === $metadata['selector'] ) {
				continue;
			}
			$block_rules .= static::get_styles_for_block( $metadata );
		}

		return $block_rules;
	}
}

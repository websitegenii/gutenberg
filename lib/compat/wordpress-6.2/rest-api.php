<?php
/**
 * Overrides Core's wp-includes/rest-api.php and registers the new endpoint for WP 6.2.
 *
 * @package gutenberg
 */

/**
 * Update `wp_template` and `wp_template-part` post types to use
 * Gutenberg's REST controller.
 *
 * @param array  $args Array of arguments for registering a post type.
 * @param string $post_type Post type key.
 */
function gutenberg_update_templates_template_parts_rest_controller( $args, $post_type ) {
	if ( in_array( $post_type, array( 'wp_template', 'wp_template-part' ), true ) ) {
		$args['rest_controller_class'] = 'Gutenberg_REST_Templates_Controller_6_2';
	}
	return $args;
}
add_filter( 'register_post_type_args', 'gutenberg_update_templates_template_parts_rest_controller', 10, 2 );

/**
 * Registers the block pattern categories REST API routes.
 */
function gutenberg_register_rest_block_pattern_categories() {
	$block_patterns = new Gutenberg_REST_Block_Pattern_Categories_Controller();
	$block_patterns->register_routes();
}
add_action( 'rest_api_init', 'gutenberg_register_rest_block_pattern_categories' );

/**
 * Registers the block pattern directory.
 */
function gutenberg_register_rest_pattern_directory() {
	$pattern_directory_controller = new Gutenberg_REST_Pattern_Directory_Controller_6_2();
	$pattern_directory_controller->register_routes();
}
add_action( 'rest_api_init', 'gutenberg_register_rest_pattern_directory' );

/**
 * Add extra collection params to pattern directory requests.
 *
 * @param array $query_params JSON Schema-formatted collection parameters.
 * @return array Updated parameters.
 */
function gutenberg_pattern_directory_collection_params_6_2( $query_params ) {
	$query_params['page'] = array(
		'description'       => __( 'Current page of the collection.', 'gutenberg' ),
		'type'              => 'integer',
		'default'           => 1,
		'sanitize_callback' => 'absint',
		'validate_callback' => 'rest_validate_request_arg',
		'minimum'           => 1,
	);

	$query_params['per_page'] = array(
		'description'       => __( 'Maximum number of items to be returned in result set.', 'gutenberg' ),
		'type'              => 'integer',
		'default'           => 100,
		'minimum'           => 1,
		'maximum'           => 100,
		'sanitize_callback' => 'absint',
		'validate_callback' => 'rest_validate_request_arg',
	);

	$query_params['offset'] = array(
		'description' => __( 'Offset the result set by a specific number of items.', 'gutenberg' ),
		'type'        => 'integer',
	);

	$query_params['order'] = array(
		'description' => __( 'Order sort attribute ascending or descending.', 'gutenberg' ),
		'type'        => 'string',
		'default'     => 'desc',
		'enum'        => array( 'asc', 'desc' ),
	);

	$query_params['orderby'] = array(
		'description' => __( 'Sort collection by post attribute.', 'gutenberg' ),
		'type'        => 'string',
		'default'     => 'date',
		'enum'        => array(
			'author',
			'date',
			'id',
			'include',
			'modified',
			'parent',
			'relevance',
			'slug',
			'include_slugs',
			'title',
			'favorite_count',
		),
	);

	return $query_params;
}
add_filter( 'rest_pattern_directory_collection_params', 'gutenberg_pattern_directory_collection_params_6_2' );

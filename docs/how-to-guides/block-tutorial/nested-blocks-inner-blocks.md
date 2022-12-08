# Nested Blocks: Using Inner Blocks

You can create a single block that nests other blocks using the react hook called `useInnerBlocksProps`. This hook allows you to change this and take more control over the markup of inner blocks areas. This is used in the Columns block, Social Links block, or any block you want to contain other blocks.

Note: A single block can only contain one hook.

Here is the basic usage.

{% codetabs %}
{% JSX %}

```js
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-06', {
	// ...

	edit: () => {
		const blockProps = useBlockProps();
		const innerBlocksProps = useInnerBlocksProps( blockProps );

		return (
			<div {...innerBlocksProps} />
		);
	},

	save: () => {
		const blockProps = useBlockProps.save();
		const innerBlocksProps = useInnerBlocksProps.save( blockProps );

		return (
			<div {...innerBlocksProps} />
		);
	},
} );
```

{% Plain %}

```js
( function ( blocks, element, blockEditor ) {
	var el = element.createElement;
	var useBlockProps = blockEditor.useBlockProps;
	var useInnerBlocksProps = blockEditor.useInnerBlocksProps;

	blocks.registerBlockType( 'gutenberg-examples/example-06', {
		title: 'Example: Inner Blocks',
		category: 'design',

		edit: function () {
			var blockProps = useBlockProps();
			var innerBlocksProps = useInnerBlocksProps( blockProps );

			return el( 'div', innerBlocksProps );
		},

		save: function () {
			var blockProps = useBlockProps.save();
			var innerBlocksProps = useInnerBlocksProps.save( blockProps );

			return el( 'div', innerBlocksProps );
		},
	} );
} )( window.wp.blocks, window.wp.element, window.wp.blockEditor );
```

{% end %}

## Allowed Blocks

Using the `ALLOWED_BLOCKS` property, you can define the set of blocks allowed in your inner blocks. This restricts the blocks that can be included only to those listed, all other blocks will not show in the inserter.

```js
const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ];
//...
const blockProps = useBlockProps();
const innerBlocksProps = useInnerBlocksProps(
	blockProps,
	{
		allowedBlocks: ALLOWED_BLOCKS
	}
);
```

## Orientation

By default, inner blocks are expected to be shown in a vertical list. A valid use-case is to style inner blocks to appear horizontally, for instance by adding CSS flex or grid properties to the inner blocks wrapper. When blocks are styled in such a way, the `orientation` prop can be set to indicate that a horizontal layout is being used:

```js
const blockProps = useBlockProps();
const innerBlocksProps = useInnerBlocksProps(
	blockProps,
	{
		orientation: 'horizontal',
	}
);
```

Specifying this prop does not affect the layout of the inner blocks, but results in the block mover icons in the child blocks being displayed horizontally, and also ensures that drag and drop works correctly.

## Template

Use the template property to define a set of blocks when inserted. You can set attributes on the blocks to define their use. The example below shows a book review template using inner blocks and setting placeholders values to show the block usage.

{% codetabs %}
{% JSX %}

```js
const MY_TEMPLATE = [
	[ 'core/image', {} ],
	[ 'core/heading', { placeholder: 'Book Title' } ],
	[ 'core/paragraph', { placeholder: 'Summary' } ],
];

//...

	edit: () => {
		const blockProps = useBlockProps();
		const innerBlocksProps = useInnerBlocksProps(
			blockProps,
			{
				template: MY_TEMPLATE,
				templateLock: 'all'
			}
		);

		return (
			<div {...innerBlocksProps} />
		);
	},
```

{% Plain %}

```js
const MY_TEMPLATE = [
	[ 'core/image', {} ],
	[ 'core/heading', { placeholder: 'Book Title' } ],
	[ 'core/paragraph', { placeholder: 'Summary' } ],
];

//...

	edit: function () {
		var blockProps = useBlockProps();
		var innerBlocksProps = useInnerBlocksProps(
			blockProps,
			{
				template: MY_TEMPLATE,
				templateLock: "all",
			}
		);

		return el( 'div', innerBlocksProps );
	},
```

{% end %}

Use the `templateLock` property to lock down the template. Using `all` locks the template completely so no changes can be made. Using `insert` prevents additional blocks from being inserted, but existing blocks can be reordered. See [templateLock documentation](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-editor/src/components/inner-blocks/README.md#templatelock) for additional information.

### Post Template

Unrelated to inner blocks but worth mentioning here, you can create a [post template](https://developer.wordpress.org/block-editor/developers/block-api/block-templates/) by post type, that preloads the block editor with a set of blocks.

The inner blocks template is for the component in the single block that you created, the rest of the post can include any blocks the user likes. Using a post template, can lock the entire post to just the template you define.

```php
add_action( 'init', function() {
	$post_type_object = get_post_type_object( 'post' );
	$post_type_object->template = array(
		array( 'core/image' ),
		array( 'core/heading' )
	);
} );
```

## Child Inner Blocks: Parent and Ancestors

A common pattern for using inner blocks is to create a custom block that will be included only in the inner blocks.

An example of this is the Columns block, that creates a single parent block called `columns` and then creates an child block called `column`. The parent block is defined to only allow the child blocks. See [Column code for reference](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-library/src/column).

When defining a child block, use the `parent` block setting to define which block is the parent. This prevents the block showing in the inserter outside of the inner blocks it is defined for.

```json
{
	"title": "Column",
	"name": "core/column",
	"parent": [ "core/columns" ],
	// ...
}
```

Another example is using the `ancestors` block setting to define a block that must be present as an ancestor, but it doesn't need to be the direct parent (like with `parent`). This prevents the block from showing in the inserter if the ancestor is not in the tree, but other blocks can be added in between, like a Columns or Group block. See [Comment Author Name code for reference](https://github.com/WordPress/gutenberg/tree/HEAD/packages/block-library/src/comment-author-name).

```json
{
	"title": "Comment Author Name",
	"name": "core/comment-author-name",
	"ancestor": [ "core/comment-template" ],
	// ...
}
```

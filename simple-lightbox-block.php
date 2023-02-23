<?php
/**
 * Plugin Name:       Simple Lightbox Block
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       simple-lightbox-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_simple_lightbox_block_block_init() {
	register_block_type( __DIR__ . '/build' );

	// エディターデフォルトスタイル
	wp_enqueue_style( 'wp-format-library' );

	// カスタムスタイル
	wp_enqueue_style(
		'simple-lightbox-block-styles', // ハンドル
		plugins_url( 'build/index.css', __FILE__ ), // ブロックエディター CSS.
		array( 'wp-edit-blocks' ), // この下に CSS を含むための依存
		filemtime( __DIR__ . '/build/index.css' )
	);
}
add_action( 'init', 'create_block_simple_lightbox_block_block_init' );

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


	add_action(
		'wp_enqueue_scripts',
		function() {
			wp_enqueue_script( 'simple-lightbox-block-js', plugins_url( 'simple-lightbox-block/build/js/lightbox.min.js' ), array( 'jquery' ), '1.0.0', true );
			wp_enqueue_style( 'simple-lightbox-block-css', plugins_url( 'simple-lightbox-block/build/css/lightbox.min.css' ), array(), '1.0.0' );

			if ( ! wp_script_is( 'jquery', 'done' ) ) {
				wp_enqueue_script( 'jquery' );
			}

			$script = '
				document.addEventListener("DOMContentLoaded", function() {
					lightbox.option({
						albumLabel: "",
						fadeDuration: 600,
						resizeDuration: 200,
						positionFromTop: 50,
						disableScrolling: true,
						wrapAround: true,
					});
				});
			';
			wp_add_inline_script( 'jquery-migrate', $script, 'after' );
		},
		10,
		1
	);
}

add_action( 'init', 'create_block_simple_lightbox_block_block_init' );

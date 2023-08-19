/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import Lightbox from "./components/Lightbox";


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export default function save(props) {
	const { attributes: { dataLightbox, mediaUrl, mediaAlt, mediaCaption } } = props;

	return (
		<Lightbox
			props={useBlockProps.save()}
			mediaUrl={mediaUrl}
			mediaAlt={mediaAlt}
			mediaCaption={mediaCaption}
			dataLightbox={dataLightbox}
		/>
	);
}

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
    InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
	MediaReplaceFlow,
} from '@wordpress/block-editor';

import { PanelBody, TextControl, Button } from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import Label from './components/Label';
import HelperText from './components/HelperText';
import Lightbox from './components/Lightbox';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { dataLightbox, mediaId, mediaUrl, mediaAlt, mediaCaption } = attributes;

	const onChangeDataLightbox = ( dataLightbox ) => {
		setAttributes( { dataLightbox: dataLightbox } );
	};

	const onChangeMedia = (media) => {
		setAttributes({
			...attributes,
			mediaUrl: media.url,
			mediaId: media.id,
			mediaAlt: media.alt,
			mediaCaption: media.caption,
		});
	};

	return (
		<div { ...useBlockProps() }>
			<BlockControls>
				<MediaReplaceFlow
					mediaId={mediaId}
					mediaURL={mediaUrl}
					allowedTypes={['image']}
					accept="image/*"
					onSelect={onChangeMedia}
					onSelectURL={onChangeMedia}
				/>
			</BlockControls>
			<InspectorControls key="setting">
				<PanelBody title="ブロックの設定">
					<Label htmlFor="dataLightbox">Lightboxの設定ID</Label>
					<TextControl value={dataLightbox} placeholder="lightbox" onChange={onChangeDataLightbox} className="text-field" />
					<HelperText>※異なる画像に同じIDを設定すると複数枚の挙動になります</HelperText>
				</PanelBody>
			</InspectorControls>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onChangeMedia}
					allowedTypes={['image']}
					value={mediaId}
					render={({ open }) => (
						mediaId && mediaUrl ? (
							<Lightbox
								mediaUrl={mediaUrl}
								mediaAlt={mediaAlt}
								mediaCaption={mediaCaption}
								dataLightbox={dataLightbox}
							/>
						) : (
							<Button className="button button-large" onClick={open}>
								画像アップロード
							</Button>
						)
					)}
				/>
			</MediaUploadCheck>
		</div>
	);
}

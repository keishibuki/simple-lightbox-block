import lightbox from 'lightbox2';

const Lightbox = ({ mediaUrl, mediaAlt, mediaCaption, dataLightbox }) => {
	lightbox.option(
		{
			'resizeDuration': 200,
			'wrapAround': true
		}
	);

	return (
		<a href={mediaUrl} data-lightbox={dataLightbox} data-title={mediaCaption} className="simple-lightbox-block">
			<img src={mediaUrl} alt={mediaAlt} />
		</a>
	);
};

export default Lightbox;

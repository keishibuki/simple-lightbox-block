import lightbox from 'lightbox2';

const Lightbox = ({ props, mediaUrl, mediaAlt, mediaCaption, dataLightbox }) => {
	lightbox.option(
		{
			'resizeDuration': 200,
			'wrapAround': true
		}
	);

	return (
		<figure {...props}>
			<a href={mediaUrl} data-lightbox={dataLightbox} data-title={mediaCaption} className="simple-lightbox-block">
				<img src={mediaUrl} alt={mediaAlt} />
			</a>
			{mediaCaption ? (
				<figcaption>
					{mediaCaption}
				</figcaption>
			) : null}
		</figure>
	);
};

export default Lightbox;

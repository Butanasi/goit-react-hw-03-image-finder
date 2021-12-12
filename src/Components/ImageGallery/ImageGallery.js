import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem';
import style from './ImageGallery.module.scss';

export const ImageGallery = ({ images }) => {
	return (
		<>
			<ul className={style.ImageGallery}>
				{images.map(({ id, webformatURL, largeImageURL, tags }) => (
					<ImageGalleryItem key={id} src={webformatURL} bigImg={largeImageURL} tags={tags} />
				))}
			</ul>
		</>
	);
};
ImageGallery.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			webformatURL: PropTypes.string.isRequired,
			largeImageURL: PropTypes.string.isRequired,
		}),
	),
};

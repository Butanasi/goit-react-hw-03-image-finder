import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from '../Modal';
import style from './ImageGalleryItem.module.scss';

export class ImageGalleryItem extends Component {
	static propTypes = {
		images: PropTypes.shape({
			tags: PropTypes.string.isRequired,
			src: PropTypes.string.isRequired,
			bigImg: PropTypes.string.isRequired,
		}),
	};
	state = {
		showModal: false,
	};

	clickOnImage = () => {
		this.setState(({ showModal }) => ({
			showModal: !showModal,
		}));
	};

	render() {
		const { showModal } = this.state;
		const { tags, src, bigImg } = this.props;
		return (
			<li className={style.ImageGalleryItem}>
				<img src={src} alt={tags} onClick={this.clickOnImage} className={style.Image} />

				{showModal && <Modal alt={tags} src={bigImg} onClose={this.clickOnImage} />}
			</li>
		);
	}
}

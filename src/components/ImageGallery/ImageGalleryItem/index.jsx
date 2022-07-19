import i from './index.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ webformatURL, alt, onOpen }) {
  return (
    <li className={i.ImageGalleryItem} onClick={onOpen}>
      <img src={webformatURL} alt={alt} className={i.ImageGalleryItem_image} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

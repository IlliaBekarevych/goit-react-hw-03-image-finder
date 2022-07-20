import s from './index.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({  webformatURL, largeImageURL, tags, onClick  }) {
  
  return (
    <li className={s.ImageGalleryItem}  onClick={() => {
      onClick(largeImageURL);
    }}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItem_image} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

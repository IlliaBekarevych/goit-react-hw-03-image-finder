import ImageGalleryItem from './ImageGalleryItem';
import i from './index.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ params, openModal }) {
  return (
    <ul className={i.ImageGallery}>
      {params.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          alt={tags}
          onOpen={() => openModal(largeImageURL, tags)}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  params: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;

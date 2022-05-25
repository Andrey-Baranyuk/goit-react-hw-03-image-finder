import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({ webformatURL, tags, toggleModal, bigImg }) {
    return (
        <li className={styles.ImageGalleryItem}>
            <img
                src={webformatURL}
                alt={tags}
                className={styles.ImageGalleryImage}
                onClick={() => { toggleModal(); bigImg() }} />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
    bigImg: PropTypes.func.isRequired,
};


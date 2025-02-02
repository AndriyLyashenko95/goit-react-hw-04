import React, { useEffect } from 'react';
import Modal from 'react-modal';
import './ImageModal.module.css'

const ImageModal = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Image Modal">
      <div onClick={onClose} className="modal-overlay">
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>Photographer: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
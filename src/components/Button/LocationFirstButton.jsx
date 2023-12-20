import React, { useState } from "react";
import styles from "./LocationFirstButton.module.css";
import Modal from "../Modal/Modal.jsx";

function LocationFirstButton() {
    const [showModal, setShowModal] = useState(false);
  
    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    return (
      <div>
        <button onClick={handleOpenModal} className={styles.UploadButton}>
          <p className={styles.UploadText}>전시하기</p>
        </button>
        <Modal show={showModal} handleClose={handleCloseModal}>
          <p>위치를 먼저 등록해주세요</p>
        </Modal>
      </div>
    );
  }

  export default LocationFirstButton;
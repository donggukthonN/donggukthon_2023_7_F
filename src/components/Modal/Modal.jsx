// Modal.jsx
import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ handleClose, show, children }) => {
  const overlayClassName = show ? styles.overlayDisplayBlock : styles.overlayDisplayNone;
  const modalClassName = show ? styles.modalDisplayBlock : styles.modalDisplayNone;

  return (
    <div className={`${styles.overlay} ${overlayClassName}`}>
      <div className={styles.ModalWrap}>
        <div className={`${styles.modal} ${modalClassName}`}>
          <section className={styles.modalMain}>
            {children}
            <button onClick={handleClose} className={styles.closeButton}>
              닫기
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Modal;

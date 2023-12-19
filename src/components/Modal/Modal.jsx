// Modal.jsx
import React from 'react';
import styles from './Modal.module.css'; // Import your modal styles

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? styles.modalDisplayBlock : styles.modalDisplayNone;

    return (
        <div className={styles.overlay}>
            <div className={styles.ModalWrap}>
                <div className={`${styles.modal} ${showHideClassName}`}>
                    <section className={styles.modalMain}>
                        {children}
                        <button onClick={handleClose} className={styles.modalMain}>닫기</button>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Modal;

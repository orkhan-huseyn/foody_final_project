import styles from './DeleteProductModal.module.css';

export default function DeleteProductModal({ onClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Are you sure it's deleted?</h2>
        <p>Attention! If you delete this product, it will not come back...</p>
        <button className={styles.cancelButton} onClick={onClose}>Cancel</button>
        <button className={styles.deleteButton}>Delete</button>
      </div>
    </div>
  );
}

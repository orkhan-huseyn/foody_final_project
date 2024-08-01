import styles from '../styles/OrderDetailsModal.module.css';
const OrderDetailsModal = ({ order, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>Order Details</h3>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <table>
          <tbody>
            <tr>
              <td>ID:</td>
              <td>{order.id}</td>
            </tr>
            <tr>
              <td>Time:</td>
              <td>{order.time}</td>
            </tr>
            <tr>
              <td>Delivery Address:</td>
              <td>{order.address}</td>
            </tr>
            <tr>
              <td>Amount:</td>
              <td>{order.amount}</td>
            </tr>
            <tr>
              <td>Payment Method:</td>
              <td>{order.paymentMethod}</td>
            </tr>
            <tr>
              <td>Contact:</td>
              <td>{order.contact}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetailsModal;

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/UserOrders.module.css';

const ordersData = [
  { id: '9177', time: '25 Dec 2021', address: '29 Eve Street, 543 Avenue Road, NY 87876', amount: '$249.7', paymentMethod: 'Cash On Delivery', contact: '994-51-410-3130' },
  { id: '9178', time: '26 Dec 2021', address: '30 Eve Street, 543 Avenue Road, NY 87876', amount: '$259.7', paymentMethod: 'Cash On Delivery', contact: '994-51-410-3131' },
  { id: '9179', time: '27 Dec 2021', address: '31 Eve Street, 543 Avenue Road, NY 87876', amount: '$269.7', paymentMethod: 'Cash On Delivery', contact: '994-51-410-3132' },
];

const UserOrders = () => {
  const [orders, setOrders] = useState(ordersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [isShowModalVisible, setIsShowModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const totalPages = Math.ceil(orders.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentOrders = orders.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handleShow = (order) => {
    setSelectedOrder(order);
    setIsShowModalVisible(true);
  };

  const handleDelete = (order) => {
    setSelectedOrder(order);
    setIsDeleteModalVisible(true);
  };

  const handleClose = () => {
    setIsShowModalVisible(false);
    setIsDeleteModalVisible(false);
    setSelectedOrder(null);
  };

  const confirmDelete = () => {
    setOrders(orders.filter(order => order.id !== selectedOrder.id));
    handleClose();
  };

  return (
    <div className={styles.ordersContainer}>
      {(isShowModalVisible || isDeleteModalVisible) && <div className={styles.dimBackground}></div>}
      <h2>Your Orders</h2>
      <table className={styles.ordersTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Time</th>
            <th>Delivery Address</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.id}>
              <td data-label="ID">{order.id}</td>
              <td data-label="Time">{order.time}</td>
              <td data-label="Delivery Address">{order.address}</td>
              <td data-label="Amount">{order.amount}</td>
              <td data-label="Payment Method">{order.paymentMethod}</td>
              <td data-label="Contact">{order.contact}</td>
              <td data-label="Actions">
                <button className={styles.iconButton} onClick={() => handleShow(order)}>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </button>
                <div className={styles.dropdownMenu}>
                  <button onClick={() => handleShow(order)}>Show</button>
                  <button onClick={() => handleDelete(order)}>Delete</button>
                </div>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.paginationRowsContainer}>
        <div className={styles.rowsPerPage}>
          <span>Rows per page</span>
          <select value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className={styles.pagination}>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            &lt;
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            &gt;
          </button>
        </div>
      </div>
      {isShowModalVisible && selectedOrder && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Order Details</h2>
            <p><strong>ID:</strong> {selectedOrder.id}</p>
            <p><strong>Time:</strong> {selectedOrder.time}</p>
            <p><strong>Delivery Address:</strong> {selectedOrder.address}</p>
            <p><strong>Amount:</strong> {selectedOrder.amount}</p>
            <p><strong>Payment Method:</strong> {selectedOrder.paymentMethod}</p>
            <p><strong>Contact:</strong> {selectedOrder.contact}</p>
            <button className={styles.closeButton} onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
      {isDeleteModalVisible && selectedOrder && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Are you sure it's deleted?</h2>
            <p>Attention! If you delete this order, it will not come back...</p>
            <div className={styles.modalActions}>
              <button className={styles.cancelButton} onClick={handleClose}>Cancel</button>
              <button className={styles.deleteButton} onClick={confirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserOrders;

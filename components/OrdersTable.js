import styles from '../styles/OrdersTable.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';

const OrdersTable = () => {
  const orders = [
    { id: 9177, customerId: 22401, time: '25 Dec 2021', deliveryAddress: '29 Eve Street, 543 Avenue Road, NY 87876', amount: 249.7, paymentMethod: 'Cash On Delivery', contact: '994-51-410-3130' },
    { id: 9177, customerId: 22401, time: '25 Dec 2021', deliveryAddress: '29 Eve Street, 543 Avenue Road, NY 87876', amount: 249.7, paymentMethod: 'Cash On Delivery', contact: '994-51-410-3130' },
    { id: 9177, customerId: 22401, time: '25 Dec 2021', deliveryAddress: '29 Eve Street, 543 Avenue Road, NY 87876', amount: 249.7, paymentMethod: 'Cash On Delivery', contact: '994-51-410-3130' },
    { id: 9177, customerId: 22401, time: '25 Dec 2021', deliveryAddress: '29 Eve Street, 543 Avenue Road, NY 87876', amount: 249.7, paymentMethod: 'Cash On Delivery', contact: '994-51-410-3130' },
    { id: 9177, customerId: 22401, time: '25 Dec 2021', deliveryAddress: '29 Eve Street, 543 Avenue Road, NY 87876', amount: 249.7, paymentMethod: 'Cash On Delivery', contact: '994-51-410-3130' },
    { id: 9177, customerId: 22401, time: '25 Dec 2021', deliveryAddress: '29 Eve Street, 543 Avenue Road, NY 87876', amount: 249.7, paymentMethod: 'Cash On Delivery', contact: '994-51-410-3130' },
    { id: 9177, customerId: 22401, time: '25 Dec 2021', deliveryAddress: '29 Eve Street, 543 Avenue Road, NY 87876', amount: 249.7, paymentMethod: 'Cash On Delivery', contact: '994-51-410-3130' },
   
  ];

  return (
    <>
      <h2 className={styles.tableTitle}>Orders</h2>
      <div className={styles.tableContainer}>
        <table className={styles.ordersTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer ID</th>
              <th>Time</th>
              <th>Delivery Address</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.customerId}</td>
                <td>{order.time}</td>
                <td>{order.deliveryAddress}</td>
                <td>{order.amount}</td>
                <td>{order.paymentMethod}</td>
                <td>{order.contact}</td>
                <td>
                  <FontAwesomeIcon icon={faEye} className={styles.actionIcon} />
                  <FontAwesomeIcon icon={faTrashAlt} className={styles.actionIcon} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrdersTable;

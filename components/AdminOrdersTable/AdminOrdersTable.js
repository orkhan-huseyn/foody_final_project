import React, { useState } from 'react';
import { FaTrashAlt, FaEye } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from './AdminOrdersTable.module.css';

const AdminOrdersTable = () => {
    const [orders, setOrders] = useState([
        {
            id: '9177',
            customerId: '022401',
            time: '25 Dec 2021',
            address: '29 Eve Street, 543 Avenue Road, Ny 87876',
            amount: '$249.7',
            paymentMethod: 'Cash On Delivery',
            contact: '994-51-410-3130',
        },
        {
            id: '9178',
            customerId: '022402',
            time: '26 Dec 2021',
            address: '30 Eve Street, 544 Avenue Road, Ny 87877',
            amount: '$199.9',
            paymentMethod: 'Credit Card',
            contact: '994-51-410-3131',
        },
    
    ]);

    const handleDelete = (orderId) => {
        setOrders(orders.filter((order) => order.id !== orderId));
    };

    return (
        <div>
            <div className={styles.ordersTitle}><h2>Orders</h2> </div>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
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
                                <td>
                                    <span className={styles.customerId}>
                                        {order.customerId}
                                    </span>
                                </td>
                                <td>{order.time}</td>
                                <td>{order.address}</td>
                                <td>{order.amount}</td>
                                <td>{order.paymentMethod}</td>
                                <td>{order.contact}</td>
                                <td>
                                    <button className={styles.iconButton}>
                                        <FaEye />
                                    </button>
                                    <button
                                        className={styles.iconButton}
                                        onClick={() => handleDelete(order.id)}
                                    >
                                        <FaTrashAlt color="#EB5757" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.pagination}>
                <div className={styles.pageInfo}>
                    <button disabled><MdKeyboardArrowLeft /></button>
                    <span>1 / 16</span>
                    <button><MdKeyboardArrowRight /></button>
                </div>
                <select>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default AdminOrdersTable;

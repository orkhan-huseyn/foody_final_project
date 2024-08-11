import React, { useState } from 'react';
import styles from './AdminHistoryTable.module.css';

const historyData = [
    {
        id: '9177',
        customerId: '022401',
        time: '25 Dec 2021',
        address: '29 Eve Street, 543 Avenue Road, NY 87876',
        amount: '$249.7',
        paymentMethod: 'Cash On Delivery',
        contact: '994-51-410-3130',
    }, {
        id: '9177',
        customerId: '022401',
        time: '25 Dec 2021',
        address: '29 Eve Street, 543 Avenue Road, NY 87876',
        amount: '$249.7',
        paymentMethod: 'Cash On Delivery',
        contact: '994-51-410-3130',
    },
    
    
];

const AdminHistoryTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(historyData.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const currentItems = historyData.slice(startIdx, startIdx + itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleItemsPerPageChange = (e) => {
        setCurrentPage(1);
    };

    return (
        <div className={styles.tableContainer}>
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
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index}>
                            <td data-label="ID">{item.id}</td>
                            <td data-label="Customer ID">{item.customerId}</td>
                            <td data-label="Time">{item.time}</td>
                            <td data-label="Delivery Address">{item.address}</td>
                            <td data-label="Amount">{item.amount}</td>
                            <td data-label="Payment Method">{item.paymentMethod}</td>
                            <td data-label="Contact">{item.contact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className={styles.pagination}>
                <div className={styles.pageInfo}>
                    <span>Page</span>
                    <strong>{currentPage}</strong>
                    <span>of</span>
                    <strong>{totalPages}</strong>
                </div>
                <div className={styles.pageControls}>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        {"<"}
                    </button>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        {">"}
                    </button>
                    <select
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default AdminHistoryTable;

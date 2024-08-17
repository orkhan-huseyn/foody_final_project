import React, { useState } from 'react';
import styles from './ordersStyles.module.css';
import { FaEllipsisV } from 'react-icons/fa';

const ordersData = [
    {
        
        id: '9177',
        image: 'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVecUWOVXeIx9y-KGDkOgmrTRDkeTptBUGvKWXG3Q5-7PsgO3J9Ugoz1VBbsTyCdYpiThd5RZ3kP2NgpJleAPIIo8olKsj8tCexZDvqysCH-tdmaLsEx9pXNstUevZLZ3hDJyw1fo2k9GfVFaRz857pTsF~o2nB~k2OZybieQmdjJgyFVeZ8af8ibsv0-VTdp2p0dIFDpJeFWzrTQkwDdIn4s8750bAtL9fMtgIjlNfQMGQUz2Sh6gtSa0YJmZ~B6f1x3~Pefdq~Dru-OSJuMWUK7EA7x5RSUXne-iXjYOooh7RY0n7BhAfWLrvQIPO~W8MDYZhL2GlXYMNAAVd9Og__',
        time: '25 Dec 2021',
        address: '29 Eve Street, 543 Evenue Road, NY 87876',
        amount: '$15.80',
        paymentMethod: 'Cash On Delivery',
        contact: '994-51-410-3130',
        name: 'Papa John’s Pizza',
        price: '7.90',
        count: '2',
    },
    {
        id: '9178',
        image: 'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVecUWOVXeIx9y-KGDkOgmrTRDkeTptBUGvKWXG3Q5-7PsgO3J9Ugoz1VBbsTyCdYpiThd5RZ3kP2NgpJleAPIIo8olKsj8tCexZDvqysCH-tdmaLsEx9pXNstUevZLZ3hDJyw1fo2k9GfVFaRz857pTsF~o2nB~k2OZybieQmdjJgyFVeZ8af8ibsv0-VTdp2p0dIFDpJeFWzrTQkwDdIn4s8750bAtL9fMtgIjlNfQMGQUz2Sh6gtSa0YJmZ~B6f1x3~Pefdq~Dru-OSJuMWUK7EA7x5RSUXne-iXjYOooh7RY0n7BhAfWLrvQIPO~W8MDYZhL2GlXYMNAAVd9Og__',        time: '25 Dec 2021',
        address: '29 Eve Street, 543 Evenue Road, NY 87876',
        amount: '$3.30',
        paymentMethod: 'Cash On Delivery',
        contact: '994-51-410-3130',
        name: 'Coffee',
        price: '1.10',
        count: '3',
    },
        {
        id: '9178',
        image: 'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVecUWOVXeIx9y-KGDkOgmrTRDkeTptBUGvKWXG3Q5-7PsgO3J9Ugoz1VBbsTyCdYpiThd5RZ3kP2NgpJleAPIIo8olKsj8tCexZDvqysCH-tdmaLsEx9pXNstUevZLZ3hDJyw1fo2k9GfVFaRz857pTsF~o2nB~k2OZybieQmdjJgyFVeZ8af8ibsv0-VTdp2p0dIFDpJeFWzrTQkwDdIn4s8750bAtL9fMtgIjlNfQMGQUz2Sh6gtSa0YJmZ~B6f1x3~Pefdq~Dru-OSJuMWUK7EA7x5RSUXne-iXjYOooh7RY0n7BhAfWLrvQIPO~W8MDYZhL2GlXYMNAAVd9Og__',        time: '25 Dec 2021',
        address: '29 Eve Street, 543 Evenue Road, NY 87876',
        amount: '$3.30',
        paymentMethod: 'Cash On Delivery',
        contact: '994-51-410-3130',
        name: 'Coffee',
        price: '1.10',
        count: '3',
    },
];
function Orders() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [deletePopup, setDeletePopup] = useState(false);

    const handleShowClick = (product) => {
        setSelectedProduct(product);
    };

    const handleClosePopup = (e) => {
        if (e.target.classList.contains(styles.popupOverlay)) {
            setSelectedProduct(null);
        }
    };

    const handleDeleteClick = () => {
        setDeletePopup(true);
    };

    const handleConfirmDelete = () => {
        setDeletePopup(false);
        alert("Order deleted successfully!"); 
    };

    const handleCancelDelete = () => {
        setDeletePopup(false);
    };

    return (
        <div className={styles.ordersContainer}>
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ordersData.map((order, index) => (
                        <tr key={index}>
                            <td>
                                <div className={styles.orderId}>{order.id}</div>
                            </td>
                            <td>{order.time}</td>
                            <td>{order.address}</td>
                            <td>{order.amount}</td>
                            <td>{order.paymentMethod}</td>
                            <td>{order.contact}</td>
                            <td className={styles.actionMenu}>
                                <FaEllipsisV />
                                <div className={styles.dropdownMenu}>
                                    <button
                                        className={styles.showButton}
                                        onClick={() => handleShowClick(order)}
                                    >
                                        Show
                                    </button>
                                    <button
                                        className={styles.deleteButton}
                                        onClick={handleDeleteClick}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.pagination}>
                <button className={styles.pageButton}>{"<"}</button>
                <span className={styles.pageNumber}>1</span>
                <span> / 03</span>
                <button className={styles.pageButton}>{">"}</button>
                <div className={styles.rowsPerPage}>
                    Rows per page
                    <select>
                        <option value="2">02</option>
                        <option value="5">05</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>

            {selectedProduct && (
               <div className={styles.popupOverlay} onClick={handleClosePopup}>
               <div className={styles.popupContent}>
                   <h2>Product Details</h2>
                   <table>
                       <thead>
                           <tr>
                               <th>Image</th>
                               <th>Name</th>
                               <th>Price $</th>
                               <th>Count</th>
                               <th>Amount</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <td><img src={selectedProduct.image} alt={selectedProduct.name} /></td>
                               <td>{selectedProduct.name}</td>
                               <td>{selectedProduct.price}</td>
                               <td>{selectedProduct.count}</td>
                               <td>{selectedProduct.amount}</td>
                           </tr>
                       </tbody>
                   </table>
                   <div className={styles.pagination}>
                       <button className={styles.pageButton}>{"<"}</button>
                       <span className={styles.pageNumber}>1</span>
                       <span> / 03</span>
                       <button className={styles.pageButton}>{">"}</button>
                       <div className={styles.rowsPerPage}>
                           Rows per page
                           <select>
                               <option value="2">02</option>
                               <option value="5">05</option>
                               <option value="10">10</option>
                           </select>
                       </div>
                   </div>
               </div>
           </div>
            )}
            {deletePopup && (
                <div className={styles.popupOverlay} onClick={handleCancelDelete}>
                    <div className={styles.deletePopupContent}>
                        <h3>Are you sure it’s deleted?</h3>
                        <p>Attention! If you delete this order, it will not come back...</p>
                        <div className={styles.deletePopupActions}>
                            <button
                                className={styles.cancelButton}
                                onClick={handleCancelDelete}
                            >
                                Cancel
                            </button>
                            <button
                                className={styles.confirmDeleteButton}
                                onClick={handleConfirmDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Orders;

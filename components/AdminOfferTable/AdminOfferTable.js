import styles from './AdminOfferTable.module.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
const offers = [
    {
        id: 9177,
        image:  'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDQzYZkDngtZMNepORGxZTuy5jMEgBEhdpWweh2BIV~kLo0gA9VGJP7mD6xFLheyi-JiADs8mBDoN7gYzzBOlUKhC1T5N9SN0OpDSVKgx14GHDHG4wk19enhhGzXMKFlEaJi1SJFyE~ZX9nUMeI~-KJXIEME4CIkaYqYCKjSQtEJCqJkul~kBsda3SyZ9AaYgCwUjrL0k4ux6eGdQWj~7Bhfbqb6oHBMSr~ySDJPah91YoTr3XgFM6G3EHwgFwlvdxhKNbCj4Tn6pfXfiKykvPPA5TSvjqeQVX1CHqcl7UlUDmUpm62mKtJ86bqAp7WHFWOO5dk0fccZ2DPoFT0H~Q__',
        title: 'Do you like Pizza at Pap...',
        description: 'Yummy this pizza but...',
    },
    {
        id: 9178,
        image:  'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDQzYZkDngtZMNepORGxZTuy5jMEgBEhdpWweh2BIV~kLo0gA9VGJP7mD6xFLheyi-JiADs8mBDoN7gYzzBOlUKhC1T5N9SN0OpDSVKgx14GHDHG4wk19enhhGzXMKFlEaJi1SJFyE~ZX9nUMeI~-KJXIEME4CIkaYqYCKjSQtEJCqJkul~kBsda3SyZ9AaYgCwUjrL0k4ux6eGdQWj~7Bhfbqb6oHBMSr~ySDJPah91YoTr3XgFM6G3EHwgFwlvdxhKNbCj4Tn6pfXfiKykvPPA5TSvjqeQVX1CHqcl7UlUDmUpm62mKtJ86bqAp7WHFWOO5dk0fccZ2DPoFT0H~Q__',
        title: 'Do you like Burgers at Bur...',
        description: 'Delicious burger with extra cheese...',
    },
   
];
function AdminOfferTable() {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.offerTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Descriptions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {offers.map((offer) => (
                        <tr key={offer.id}>
                            <td>{offer.id}</td>
                            <td>
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className={styles.offerImage}
                                />
                            </td>
                            <td>{offer.title}</td>
                            <td>{offer.description}</td>
                            <td>
                                <FaEdit className={styles.editIcon} />
                                <FaTrashAlt className={styles.deleteIcon} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.paginationContainer}>
                <div className={styles.paginationInfo}>
                    <span>1 / 1</span>
                </div>
                <div className={styles.paginationControls}>
                    <button className={styles.paginationButton}>‹</button>
                    <select className={styles.pageSelector}>
                        <option value="01">01</option>
                    </select>
                    <button className={styles.paginationButton}>›</button>
                </div>
            </div>
        </div>
    );
}

export default AdminOfferTable;

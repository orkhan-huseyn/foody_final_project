
import styles from '../styles/AdminLayout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faUtensils, faTags, faBoxOpen, faGift, faSignOutAlt, faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons';

export default function AdminLayout({ children }) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Foody.</div>
        <ul className={styles.menu}>
          <li><FontAwesomeIcon icon={faPizzaSlice} /><span>Dashboard</span></li>
          <li><FontAwesomeIcon icon={faUtensils} /><span>Products</span></li>
          <li><FontAwesomeIcon icon={faUtensils} /><span>Restaurants</span></li>
          <li><FontAwesomeIcon icon={faTags} /><span>Category</span></li>
          <li><FontAwesomeIcon icon={faBoxOpen} /><span>Orders</span></li>
          <li><FontAwesomeIcon icon={faGift} /><span>Offer</span></li>
          <li><FontAwesomeIcon icon={faSignOutAlt} /><span>Logout</span></li>
        </ul>
      </aside>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

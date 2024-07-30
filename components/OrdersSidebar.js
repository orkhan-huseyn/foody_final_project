import styles from '../styles/OrdersSidebar.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faBox, faStore, faTags, faClipboardList, faGift, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const OrdersSidebar = () => {
    
  return (
    <>
     <div className={styles.logo}>Foody.</div>
    <div className={styles.sidebar}>
   

      
      <ul className={styles.menu}>
        <li><Link href="/"><FontAwesomeIcon icon={faTh} /> Dashboard</Link></li>
        <li><Link href="/products"><FontAwesomeIcon icon={faBox} /> Products</Link></li>
        <li><Link href="/restaurants"><FontAwesomeIcon icon={faStore} /> Restaurants</Link></li>
        <li><Link href="/category"><FontAwesomeIcon icon={faTags} /> Category</Link></li>
        <li className={styles.orderss}><Link href="/orders"><FontAwesomeIcon icon={faClipboardList} /> Orders</Link></li>
        <li><Link href="/offer"><FontAwesomeIcon icon={faGift} /> Offer</Link></li>
        <li><Link href="/logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></li>
      </ul>
    </div>
    </>
  );
};


export default OrdersSidebar;

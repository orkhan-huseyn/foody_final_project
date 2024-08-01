
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBasket, faClipboardList, faCreditCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/SidebarMenu.module.css';

const SidebarMenu = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link href="/user-profile" legacyBehavior>
            <a><FontAwesomeIcon icon={faUser} /> Profile</a>
          </Link>
        </li>
        <li>
          <Link href="/basket" legacyBehavior>
            <a><FontAwesomeIcon icon={faShoppingBasket} /> Your Basket</a>
          </Link>
        </li>
        <li>
          <Link href="/orders" legacyBehavior>
            <a  className={styles.orders}><FontAwesomeIcon icon={faClipboardList} /> Your Orders</a>
          </Link>
        </li>
        <li>
          <Link href="/checkout" legacyBehavior>
            <a><FontAwesomeIcon icon={faCreditCard} /> Checkout</a>
          </Link>
        </li>
        <li>
          <Link href="/" legacyBehavior>
            <a><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;

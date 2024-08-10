import styles from './ActionsMenu.module.css';
const ActionsMenu = ({ onShow }) => {
  return (
    <div className={styles.menu}>
      <button className={styles.menuItem} onClick={onShow}>Show</button>
      <button className={styles.menuItem}>Delete</button>
    </div>
  );
};

export default ActionsMenu; 

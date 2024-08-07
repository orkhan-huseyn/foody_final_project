import styles from '../styles/ProfileSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ProfileSection = () => {
  return (
    <div className={styles.profileSection}>
      <FontAwesomeIcon icon={faUserCircle} className={styles.icon} />
      <span><a>Admin</a></span>
    </div>
  );
};

export default ProfileSection;

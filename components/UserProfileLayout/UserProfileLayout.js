import styles from './UserProfileLayout.module.css';

import SideBar from 'components/UserSidebar/UserSideBar';

function UserProfileLayout({ children }) {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.right}>{children}</div>
        </div>
    );
}

export default UserProfileLayout;

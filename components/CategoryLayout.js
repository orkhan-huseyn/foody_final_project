import React from 'react';
import CategorySidebar from './CategorySidebar';
import styles from '../styles/CategoryLayout.module.css';

const CategoryLayout = ({ children }) => {
  return (
    <div className={styles.adminLayout}>
      <CategorySidebar />
      <div className={styles.mainContent}>
        {children}
      </div>
    </div>
  );
}

export default CategoryLayout;

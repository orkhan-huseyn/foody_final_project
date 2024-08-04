import React, { useState } from 'react';
import styles from '../styles/CategoryTable.module.css';
import CategoryEditDeleteButtons from './CategoryEditDeleteButtons';

const CategoryTable = () => {
  const [categories, setCategories] = useState([
    { id: 9177, image: 'https://s3-alpha-sig.figma.com/img/cce6/e78a/d445d897eef4d5a9f184bc4c62d631e4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDQzYZkDngtZMNepORGxZTuy5jMEgBEhdpWweh2BIV~kLo0gA9VGJP7mD6xFLheyi-JiADs8mBDoN7gYzzBOlUKhC1T5N9SN0OpDSVKgx14GHDHG4wk19enhhGzXMKFlEaJi1SJFyE~ZX9nUMeI~-KJXIEME4CIkaYqYCKjSQtEJCqJkul~kBsda3SyZ9AaYgCwUjrL0k4ux6eGdQWj~7Bhfbqb6oHBMSr~ySDJPah91YoTr3XgFM6G3EHwgFwlvdxhKNbCj4Tn6pfXfiKykvPPA5TSvjqeQVX1CHqcl7UlUDmUpm62mKtJ86bqAp7WHFWOO5dk0fccZ2DPoFT0H~Q__', name: 'Pizza', slug: 'yummy-pizza' },
    { id: 9178, image: 'https://s3-alpha-sig.figma.com/img/502d/c77c/f65ad72e8d3a1894ddf04255f3a3a1b0?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M25OpGqJGE2AHsGdFa3DQ43i~aqzLwdhjgAZFEcsG4LzHqk3jmU4s4XxubrmPkb85oeTMFApPt3I7YQsLXkQMeuTfA46prs9yqzcTmV-G-OLtbrY02Oc5Ix-dwFs-2ZxIP2grK9lA2p-EGGrh7fE~IyINl8VWNZbHYuO~SutodVcBEEsW-oS9nu8fhGiQks9osofmNOnKA6oad1woHy2DJtN5IyWA0vG7NZEWViXmGWB7l3jLvBSiRL2WXqvxoBbb4oMSCe3K~TSg6bWEISzGL~v9cJhxXEFt8-W0YylmclY~8z8AFlj1nW9ZKBO0fhdSAL80bbENq5vDfLkYmtq2w__', name: 'Sendvic', slug: 'sendvic' },
    { id: 9179, image: 'https://s3-alpha-sig.figma.com/img/fc8e/6221/d5814e884b2aee5a6ba508c81b1177ab?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ar~Q0nL3O7Qas-r6elvnw6QX50SEk1TSK1d2MAB5lhHy7MyTdfkB0tivJf3JDLxmGbTf2PPdws2Slp9PFNdBYcKMUUQnUVhW4JhPkOvy0mHVX~s~YfKQshRwvAX9~xYNqf3sUK1gYJV6HcU1m6VMRQMv8HDoir2okO4uPUOETnlMdu7TW2xmQk1dtdBwDnPOU3YW-YxsnJCejUsOz13KruIXlisjOTLBkTF9ASv3FQj7qWDnV78v602aimFcqBE0Ts5gmC6XHRsjBaTK-VEv45lMhiaRnBNtrobXkFEB7FAofTohPSKPDnvf1PkMLgXMmHxK9ik63f4s-x11shC~7w__', name: 'Fries', slug: 'fries' },
  ]);

  const handleEdit = (categoryId) => {
    const categoryToEdit = categories.find(cat => cat.id === categoryId);
    console.log(`Edit category with id: ${categoryId}`, categoryToEdit);
  };

  const handleDelete = (categoryId) => {
    const updatedCategories = categories.filter(cat => cat.id !== categoryId);
    setCategories(updatedCategories);
    console.log(`Delete category with id: ${categoryId}`);
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td className={styles.tableCell}>{category.id}</td>
              <td className={styles.tableCell}>
                <img className={styles.img} src={category.image} alt={category.name} />
              </td>
              <td className={styles.tableCell}>{category.name}</td>
              <td className={styles.tableCell}>{category.slug}</td>
              <td className={styles.tableCell}>
                <CategoryEditDeleteButtons
                  onEdit={() => handleEdit(category.id)}
                  onDelete={() => handleDelete(category.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryTable;

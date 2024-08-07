import React from 'react';
import CategoryLayout from '../../components/CategoryLayout';
import CategoryTable from '../../components/CategoryTable';
import CategoryAddButton from '../../components/CategoryAddButton';


const CategoryPage = () => {
  return (
    <CategoryLayout>
      <div >
        <h1>Category</h1>
        <CategoryAddButton />
      </div>
      <CategoryTable />
    </CategoryLayout>
  );
}

export default CategoryPage;

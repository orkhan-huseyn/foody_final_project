import AdminLayout from 'components/AdminLayout/AdminLayout';
import CategoryTable from '../../../components/AdminCategoryTable/AdminCategoryTable';
import CategoryAddButton from '../../../components/CategoryAddButton/CategoryAddButton';

const CategoryPage = () => {
    return (
        <AdminLayout>
            <div>
                <h1>Category</h1>
                <CategoryAddButton />
            </div>
            <CategoryTable />
        </AdminLayout>
    );
};

export default CategoryPage;

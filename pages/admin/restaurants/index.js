import AdminLayout from 'components/AdminLayout/AdminLayout';
import AdminRestaurantsCart from 'components/AdminRestaurantsCart/AdminRestaurantsCart';

function index() {
    return (
        <AdminLayout>
            <div> <AdminRestaurantsCart /></div>
        </AdminLayout>
    );
}

export default index;

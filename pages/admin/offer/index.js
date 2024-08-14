import AdminLayout from 'components/AdminLayout/AdminLayout';
import AdminOfferTable from 'components/AdminOfferTable/AdminOfferTable';
function index() {
    return (
        <AdminLayout>
            <div> <AdminOfferTable /></div>
        </AdminLayout>
    );
}

export default index;

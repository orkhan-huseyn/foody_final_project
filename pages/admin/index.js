import AdminLayout from 'components/AdminLayout/AdminLayout';
import AdminDasboard from 'components/AdminDasboard/AdminDasboard';

function adminlayout() {
    return (
        <AdminLayout>
            <div> 
                <AdminDasboard />
            </div>
        </AdminLayout>
    );
}

export default adminlayout;

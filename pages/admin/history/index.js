import AdminLayout from 'components/AdminLayout/AdminLayout';
import AdminHistoryTable from 'components/AdminHistoryTable/AdminHistoryTable';  

function AdminHistory() {
    return (
        <AdminLayout>
            <div>
                <AdminHistoryTable />  
            </div>
        </AdminLayout>
    );
}

export default AdminHistory;


import SidebarMenu from '../components/SidebarMenu';
import UserOrders from '../components/UserOrders';

const OrdersPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarMenu />
      <UserOrders />
    </div>
  );
};

export default OrdersPage;
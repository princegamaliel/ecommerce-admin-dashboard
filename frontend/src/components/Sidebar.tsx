import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: 200, background: '#eee', padding: 20, height: '100vh' }}>
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

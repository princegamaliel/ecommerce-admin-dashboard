import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{
        width: 220,
        padding: 20,
        background: '#f4f4f4',
        height: '100vh'
      }}
    >
      <h3>Admin</h3>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#1976d2' : '#333',
            textDecoration: 'none'
          })}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/orders"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#1976d2' : '#333',
            textDecoration: 'none'
          })}
        >
          Orders
        </NavLink>

        <NavLink
          to="/products"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#1976d2' : '#333',
            textDecoration: 'none'
          })}
        >
          Products
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

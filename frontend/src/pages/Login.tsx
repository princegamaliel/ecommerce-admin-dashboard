import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login as Admin</button>
    </div>
  );
};

export default Login;

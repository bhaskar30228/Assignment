import { useContext } from 'react';
import './Main.css';
import { AuthContext } from '../context/AuthContext';

const Main = () => {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <div className="main">
      {!isLoggedIn&&(
         <div
        className="login-box"
        style={{
          width: '300px',
          margin: '100px auto',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          textAlign: 'center',
          cursor: 'pointer',
          background: '#fff'
        }}
        onClick={() => window.location.href = '/signin'}
      >
        <h2 style={{ margin: 0 }}>Login</h2>
      </div>
      )}
     
    </div>
  );
};

export default Main;

import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import UserMain from '../components/UserMain';
import { AuthContext } from '../context/AuthContext';
import SignIn from './SignIn';

const UserDash = () => {
   const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    isLoggedIn ?(
    <div className="home-layout">
      <Navbar />
      <div className="main-body">
        <Sidebar />
        <div className="content-area">
          <UserMain />
          <Footer />
        </div>
      </div>
    </div>):<SignIn/>
  );
};

export default UserDash;

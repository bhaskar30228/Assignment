import  { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import UserProfile from '../components/UserProfile';
import { AuthContext } from '../context/AuthContext';
import SignIn from './SignIn';

const Profile = () => {
   const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    isLoggedIn ?(    
    <div className="home-layout">
      <Navbar />
      <div className="main-body">
        <Sidebar />
        <div className="content-area">
          <UserProfile/>
          <Footer />
        </div>
      </div>
    </div>
    ):
    <SignIn/>
  );
};

export default Profile;

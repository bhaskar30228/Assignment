import { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

import UserTickets from '../components/UserTickets';
import { AuthContext } from '../context/AuthContext';
import SignIn from './SignIn';

const Tickets = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    isLoggedIn?(
    <div className="home-layout">
      <Navbar />
      <div className="main-body">
        <Sidebar />
        <div className="content-area">
          <UserTickets/>
          <Footer />
        </div>
      </div>
    </div>
    ):<SignIn/>
  );
};

export default Tickets;

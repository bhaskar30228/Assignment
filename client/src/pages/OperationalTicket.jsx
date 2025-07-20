import { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';
import SignIn from './SignIn';
import OperationTeamSidebarrrrr from '../components/OperationTeamSidebarrrrr';
import OperationalMyTicket from '../components/OperationalMyTicket';

const OperationalTicket = () => {
   const { isLoggedIn } = useContext(AuthContext);
  return (
    isLoggedIn ?(
    <div className="home-layout">
      <Navbar />
      <div className="main-body">
        <OperationTeamSidebarrrrr />
        <div className="content-area">
          <OperationalMyTicket/>
          <Footer />
        </div>
      </div>
    </div>):<SignIn/>
  );
};

export default OperationalTicket;

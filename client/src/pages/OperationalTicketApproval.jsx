import { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';
import SignIn from './SignIn';
import TicketApproval from '../components/TicketApproval';
import OperationTeamSidebarrrrr from '../components/OperationTeamSidebarrrrr';

const OperationalTicketApproval = () => {
   const { isLoggedIn } = useContext(AuthContext);
  return (
    isLoggedIn ?(
    <div className="home-layout">
      <Navbar />
      <div className="main-body">
        <OperationTeamSidebarrrrr />
        <div className="content-area">
          <TicketApproval/>
          <Footer />
        </div>
      </div>
    </div>):<SignIn/>
  );
};

export default OperationalTicketApproval;

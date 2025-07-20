import { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import UserMain from '../components/UserMain';
import { AuthContext } from '../context/AuthContext';
import SignIn from './SignIn';
import TicketApproval from '../components/TicketApproval';
import OperationTeamSidebarrrrr from '../components/OperationTeamSidebarrrrr';
import OperationalMyTicket from '../components/OperationalMyTicket';
import OperationPerformanceHero from '../components/OperationPerformanceHero';

const OperationalPerformance = () => {
   const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    isLoggedIn ?(
    <div className="home-layout">
      <Navbar />
      <div className="main-body">
       <OperationTeamSidebarrrrr />
        <div className="content-area">
          <OperationPerformanceHero/>
          <Footer />
        </div>
      </div>
    </div>):<SignIn/>
  );
};

export default OperationalPerformance;

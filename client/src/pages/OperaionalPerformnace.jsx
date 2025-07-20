import { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';
import SignIn from './SignIn';
import OperationTeamSidebarrrrr from '../components/OperationTeamSidebarrrrr';
import OperationPerformanceHero from '../components/OperationPerformanceHero';

const OperationalPerformance = () => {
   const { isLoggedIn} = useContext(AuthContext);
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

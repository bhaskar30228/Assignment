import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';

import OperationTeamDashboard from '../components/OperationTeamDashboard';
import Footer from '../components/Footer';
import SignIn from './SignIn';
import OperationTeamSidebar from '../components/OperationTeamSidebarrrrr';


const Operationteam = () => {
  const { isLoggedIn} = useContext(AuthContext);
  return (
    isLoggedIn ?(
    <div className="home-layout">
      <Navbar />
      <div className="main-body">
       <OperationTeamSidebar/>
        <div className="content-area">
          <OperationTeamDashboard/>
          <Footer />
        </div>
      </div>
    </div>):<SignIn/>
  );
}

export default Operationteam

import { LuLayoutDashboard } from "react-icons/lu";
import NewTicket from "../assets/New Ticket.png";
import Ticket from "../assets/Two Tickets.png";
import Performance from "../assets/Performance.png";
import Approval from "../assets/Approval.png";
import './OperationTeamSidebar.css';
import { useNavigate } from 'react-router-dom';

const OperationTeamSidebarrrrr = () => {
  const navigate =useNavigate()
  const dashboard=()=>{
    navigate('/dashboard')
  }
  const newTicket=()=>{
    navigate('/approval')
  }
  const Tickets=()=>{
    navigate('/myTickets')
  }
  const performance=()=>{
    navigate('/performance')
  }
  
  return (
    <div className="sidebar">
      <div onClick={dashboard} className="sidebar-item">
        <LuLayoutDashboard className="sidebar-icon" />
        <span >Dashboard</span>
      </div>

      <div onClick={newTicket} className="sidebar-item">
        <img src={Approval} alt="New Ticket" className="sidebar-img" />
        <span >Ticket approval</span>
      </div>

      <div onClick={Tickets} className="sidebar-item">
        <img src={Ticket} alt="Tickets" className="sidebar-img" />
        <span >My Ticket</span>
      </div>

      <div onClick={performance} className="sidebar-item">
        <img src={Performance} alt="Tickets" className="sidebar-img" />
        <span >Performance</span>
      </div>
    </div>
  );
};

export default OperationTeamSidebarrrrr;

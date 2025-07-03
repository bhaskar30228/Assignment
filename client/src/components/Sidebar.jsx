import { LuLayoutDashboard } from "react-icons/lu";
import NewTicket from "../assets/New Ticket.png";
import Ticket from "../assets/Two Tickets.png";
import './sidebar.css';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate =useNavigate()
  const dashboard=()=>{
    console.log("dashboard clicked");
    navigate('/dashboard')
  }
  const newTicket=()=>{
    console.log("new ticket clicked");
    navigate('/newTicket')
  }
  const Tickets=()=>{
    console.log("tickets clicked");
    navigate('/tickets')
  }
  
  return (
    <div className="sidebar">
      <div onClick={dashboard} className="sidebar-item">
        <LuLayoutDashboard className="sidebar-icon" />
        <span >Dashboard</span>
      </div>

      <div onClick={newTicket} className="sidebar-item">
        <img src={NewTicket} alt="New Ticket" className="sidebar-img" />
        <span >New Ticket</span>
      </div>

      <div onClick={Tickets} className="sidebar-item">
        <img src={Ticket} alt="Tickets" className="sidebar-img" />
        <span >Tickets</span>
      </div>
    </div>
  );
};

export default Sidebar;

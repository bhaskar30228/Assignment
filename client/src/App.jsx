import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import "./App.css"
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from "./pages/ForgotPassword"
import UserDash from "./pages/UserDash"
import NewTicket from "./pages/NewTicket"
import Tickets from "./pages/Tickets"
import Profile from "./pages/UserProfile"
import EditProfilePage from "./pages/EditProfilePage"
import Operationteam from "./pages/Operationteam"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import { useEffect } from "react"
import OperationalTicketApproval from "./pages/OperationalTicketApproval"
import OperationalTicket from "./pages/OperationalTicket"
import OperationalPerformance from "./pages/OperaionalPerformnace"

function App() {
  const {role}=useContext(AuthContext)
  const router=createBrowserRouter([
  
  {path:"/",element:<Home/>},
  {path:"/",element:<Operationteam/>},
  {path:"/signup",element:<SignUp/>},
  {path:"/signIn",element:<SignIn/>},
  {path:"/forgotPassword",element:<ForgotPassword/>},
  {path:"/dashboard",element:role==="User"?<UserDash/>:<Operationteam/>},
  {path:"/newTicket",element:<NewTicket/>},
  {path:"/tickets",element:<Tickets/>},
  {path:"/profile",element:<Profile/>},
  {path:"/editProfile",element:<EditProfilePage/>},
  {path:"/approval",element:<OperationalTicketApproval/>},
  {path:"/myTickets",element:<OperationalTicket/>},
  {path:"/performance",element:<OperationalPerformance/>}


])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App

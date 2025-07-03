import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import "./App.css"
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from "./pages/ForgotPassword"
import UserDash from "./pages/UserDash"
import NewTicket from "./pages/NewTicket"
import Tickets from "./pages/Tickets"
import Profile from "./pages/Profile"
import EditProfilePage from "./pages/EditProfilePage"

function App() {
const router=createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"/signup",element:<SignUp/>},
  {path:"/signIn",element:<SignIn/>},
  {path:"/forgotPassword",element:<ForgotPassword/>},
  {path:"/dashboard",element:<UserDash/>},
  {path:"/newTicket",element:<NewTicket/>},
  {path:"/tickets",element:<Tickets/>},
  {path:"/profile",element:<Profile/>},
  {path:"/editProfile",element:<EditProfilePage/>},


])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App

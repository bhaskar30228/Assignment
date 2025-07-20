import { createContext, useState ,useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const serverUrl = "http://localhost:5000";
  const token = localStorage.getItem('token'); 
  const user = localStorage.getItem('user'); 
  const role = user ? JSON.parse(user).role : null; // Assuming user object has a role property
    const [isLoggedIn,setIsLoggedIn]=useState(token ? true : false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn,serverUrl,role}}>
      {children}
    </AuthContext.Provider>
  );
}
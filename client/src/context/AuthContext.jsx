import { createContext, useState ,useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const token = localStorage.getItem('token'); 
    const [isLoggedIn,setIsLoggedIn]=useState(token ? true : false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
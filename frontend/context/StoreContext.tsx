import React, {createContext, ReactNode, useEffect, useState} from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setLogIn } from '../redux/userSlice';

interface StoreProviderProps {
  children: ReactNode;
}

interface StoreContextType {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  token: string | null;
  url: string;
}

export const StoreContext = createContext<StoreContextType | null>(null);

const StoreProvider = ({ children }: StoreProviderProps) => {
  const url = 'https://localhost:4000';
  const [token, setToken] = useState<string | null>(null);
  const dispatch = useDispatch();

  // Load token from localStorage on initial render
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Save token to localStorage when it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  // Fetch user data when token changes
  useEffect(() => {
    const getUserData = async () => {
      if (!token) return;
      
      try {
        const res = await axios.post(url + '/user/current', {}, {
          headers: { token }
        });
        
        if (res.data.success) {
          dispatch(setLogIn(res.data.user));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    
    getUserData();
  }, [token, dispatch, url]);

  const contextValue: StoreContextType = { setToken, token, url };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
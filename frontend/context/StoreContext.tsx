'use client'
import React, {createContext, ReactNode, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { setLogIn } from '@/redux/userSlice';
import { api, ENDPOINT, API_BASE_URL } from "@/lib/api";

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
  const url = API_BASE_URL as string;
  const [token, setToken] = useState<string | null>(() => (typeof window !== 'undefined' ? localStorage.getItem('token') : null));
  const dispatch = useDispatch();

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
        const res = await api.post(ENDPOINT.user, {}, {
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
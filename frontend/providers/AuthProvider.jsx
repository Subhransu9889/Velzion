'use client'
import React, {useEffect, useContext} from 'react'
import {api, ENDPOINT} from "@/lib/api";
import {useDispatch} from "react-redux";
import {Loader2Icon} from "lucide-react";
import {setLogIn} from "../redux/userSlice";
import {StoreContext} from '@/context/StoreContext';

const AuthProvider = ({children}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const storeContext = useContext(StoreContext);

    useEffect(() => {
        setLoading(true);
        const fetcher = async () => {
            try{
                if (!storeContext || !storeContext.token) {
                    setLoading(false);
                    return;
                }
                
                const res = await api.post(ENDPOINT.user, {}, {
                    headers: { token: storeContext.token }
                });
                
                console.log(res);
                if(res.data.success) {
                    console.log(res.data.user);
                    dispatch(setLogIn(res.data.user));
                }
            } catch (err){
                console.log('user needs to login', err);
            } finally {
                setLoading(false);
            }
        }
        fetcher();
    }, [dispatch, storeContext]);

    if(loading)
        return (
            <div className='flex justify-center items-center h-screen w-full'>
                <Loader2Icon className='animate-spin h-10 w-10 text-white'/>
            </div>
        )
    return (
        <>
            {children}
        </>
    )
}
export default AuthProvider

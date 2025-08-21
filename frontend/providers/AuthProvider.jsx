'use client'
import React, {useEffect} from 'react'
import {api, ENDPOINT} from "@/lib/api";
import {useDispatch} from "react-redux";
import {Loader2Icon} from "lucide-react";
import {setLogIn} from "../redux/userSlice";

const AuthProvider = ({children}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        setLoading(true);
        const fetcher = async () => {
            try{
                const res = await api.get(ENDPOINT.user);
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
    }, [dispatch]);

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

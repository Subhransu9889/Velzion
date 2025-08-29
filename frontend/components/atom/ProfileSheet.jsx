'use client'
import React, {useEffect, useState, useContext} from 'react';
import Link from "next/link";
import {redirect, useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {api, ENDPOINT} from "@/lib/api";
import {setLogIn, setLogOut} from "@/redux/userSlice";
import {toast} from "sonner";
import {StoreContext} from '@/context/StoreContext';

const ProfileSheet = ({ setOpen }) => {
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const router = useRouter();
    const login = useSelector((state) => state.user.logIn);
    const user = useSelector((state) => state.user.user);
    const storeContext = useContext(StoreContext);
    const authconditionHandler = async () => {
        if (login) {
            try{
                const res = await api.get(ENDPOINT.logout);
                if(res.data.success) {
                    toast(res.data.message);
                    dispatch(setLogOut());
                    if (storeContext) {
                        storeContext.setToken(null);
                    }
                    router.push('/');
                    if (setOpen) setOpen(false);
                }
            } catch (err){
                console.log(err);
            }
        }
        else {
            if (setOpen) setOpen(false);
            router.push('/signin');
        }
    }
  return <div className="w-full max-w-md mx-auto px-4">
      <div className='flex flex-col gap-3 justify-evenly items-center'>
          <img src='/Images/profile.png' alt='profile' className='w-16 h-16 rounded-full text-white'/>
          <h3 className="text-xl font-bold capitalize">
              {login ? `Welcome, ${user?.name || 'User'}` : 'Guest'}
          </h3>
          <p className='text-sm md:text-base text-gray-500 shadow-2xl p-2 text-center rounded-2xl'>Dive into your personalized entertainment universe!</p>
          <div className='mt-6 w-full'>
              {
                  !login ? (<div className='text-center text-gray-500 text-sm md:text-base p-2'>
                      <Link href='/signin'>✨ Sign in to unlock your personalized entertainment world!</Link>
                  </div>) : (
                      <>
                          <div className="flex flex-col gap-3 w-full">
                              {[
                                  { label: 'Subscribe Now', href: '/subscription' },
                                  { label: 'Home', href: '/' },
                                  { label: 'Movies', href: '/movies' },
                                  { label: 'Bookmarks', href: '/' },
                                  { label: '+', href: '/plus' },
                                  { label: 'Help & Legal', href: '/help-center' },
                              ].map(({ label, href }, idx) => (
                                  <div
                                      key={idx}
                                      className="rounded-xl text-center p-2 md:p-3 text-sm md:text-base bg-white border border-[#f05a28] shadow-md hover:shadow-orange-500/50 transition duration-200 hover:scale-[1.02] cursor-pointer"
                                  >
                                      <Link href={href} className="text-[#f05a28] hover:text-[#ec008c] font-semibold tracking-wide block w-full">
                                          {label}
                                      </Link>
                                  </div>
                              ))}
                          </div>

                      </>
                  )
              }
          </div>
          <div className="w-full flex justify-center mt-6">
              <button className='bg-[linear-gradient(135deg,_#f05a28,_#ec008c)] text-white rounded-full px-6 md:px-8 py-2 md:py-3 cursor-pointer w-full max-w-[200px]' onClick={authconditionHandler}>
                  {login ? 'Logout' : 'Login'}
              </button>
          </div>
      </div>
  </div>;
};

export default ProfileSheet;
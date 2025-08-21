'user client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {redirect, useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {api, ENDPOINT} from "@/lib/api";
import {setLogIn, setLogOut} from "@/redux/userSlice";
import {toast} from "sonner";

const ProfileSheet = () => {
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const router = useRouter();
    const login = useSelector((state) => state.user.logIn);
    const user = useSelector((state) => state.user.user);
    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const res = await api.post(ENDPOINT.user, user);
                if (res.data && res.data.success) {
                    // Save user in Redux
                    dispatch(setLogIn({ user: res.data.user }));
                }
            } catch (err) {
                console.log(err);
            }
        };
        if (login && !user?.name) { // avoid refetch if user already loaded
            fetchCurrentUser();
        }
        // Only runs when login or user changes—not on every userData change
    }, [login, user, dispatch]);
    const authconditionHandler = async () => {
        if (login) {
            try{
                const res = await api.get(ENDPOINT.logout);
                if(res.data.success) {
                    toast(res.data.message);
                    dispatch(setLogOut());
                    router.push('/');
                }
            } catch (err){
                console.log(err);
            }
        }
        else {
            redirect('/signin');
        }
    }
  return <div>
      <div className='flex flex-col gap-3 justify-evenly items-center'>
          <img src='/Images/profile.png' alt='profile' className='w-16 h-16 rounded-full text-white'/>
          <h3 className="text-xl font-bold capitalize">
              {login ? `Welcome, ${user?.name || 'User'}` : 'Guest'}
          </h3>
          <p className='md:text-[14px] sm:text-[8px] text-gray-500 shadow-2xl p-2'>Dive into your personalized entertainment universe!</p>
          <div className='mt-8'>
              {
                  !login ? (<div className='text-center text-gray-500 text-sm md:text-xl'>
                      <Link href='/signin'>✨ Sign in to unlock your personalized entertainment world!</Link>
                  </div>) : (
                      <>
                          <div className="flex flex-col gap-4">
                              {[
                                  { label: 'Subscribe Now', href: '/subscribe' },
                                  { label: 'Home', href: '/' },
                                  { label: 'Movies', href: '/' },
                                  { label: 'Bookmarks', href: '/' },
                                  { label: '+', href: '/' },
                                  { label: 'Help & Legal', href: '/' },
                              ].map(({ label, href }, idx) => (
                                  <div
                                      key={idx}
                                      className="rounded-xl text-center p-3 text-sm md:text-xl bg-white border border-[#f05a28] shadow-md hover:shadow-orange-500/50 transition duration-200 hover:scale-[1.02] cursor-pointer"
                                  >
                                      <Link href={href} className="text-[#f05a28] hover:text-[#ec008c] font-semibold tracking-wide">
                                          {label}
                                      </Link>
                                  </div>
                              ))}
                          </div>

                      </>
                  )
              }
          </div>
          <div>
              <button className='bg-[linear-gradient(135deg,_#f05a28,_#ec008c)] text-white rounded-full px-8 py-3 mt-8 cursor-pointer' onClick={authconditionHandler}>
                  {login ? 'Logout' : 'Login'}
              </button>
          </div>
      </div>
  </div>;
};

export default ProfileSheet;
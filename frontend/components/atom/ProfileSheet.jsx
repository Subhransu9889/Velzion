import React, {useState} from 'react';
import Link from "next/link";

const ProfileSheet = () => {
    const [login, setLogin] = useState(true);
  return <div>
      <div className='flex flex-col gap-3 justify-evenly items-center mt-5'>
          <img src='/Images/profile.png' alt='profile' className='w-16 h-16 rounded-full text-white'/>
          <h3 className="text-xl font-bold capitalize">
              {login ? 'Welcome, Subransu' : 'Guest'}
          </h3>
          <p className='md:text-[14px] sm:text-[8px] text-gray-500 shadow-2xl p-2'>Dive into your personalized entertainment universe!</p>
          <div className='mt-12'>
              {
                  !login ? (<div className='text-center text-gray-500 text-sm md:text-xl'>
                      <Link href='/auth/login'>✨ Sign in to unlock your personalized entertainment world!</Link>
                  </div>) : (
                      <>
                          <div className="flex flex-col gap-4">
                              {[
                                  { label: 'Top Trending', href: '/' },
                                  { label: 'For You', href: '/' },
                                  { label: 'Your Space', href: '/' },
                                  { label: 'Bookmarks', href: '/' },
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
              <button className='bg-[linear-gradient(135deg,_#f05a28,_#ec008c)] text-white rounded-full px-8 py-3 mt-8 cursor-pointer'>
                  {login ? 'Logout' : 'Login'}
              </button>
          </div>
      </div>
  </div>;
};

export default ProfileSheet;
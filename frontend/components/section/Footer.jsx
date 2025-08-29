'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import {redirect} from "next/navigation";
import {toast} from "sonner";

function Footer() {
    const aboutHandler = () => {
        redirect('/about');
    }
    const careerHandler = () => {
        redirect('/career');
    }
    const helpHandler = () => {
        redirect('/help-center');
    }
    const termsHandler = () => {
        redirect('/termsofuse');
    }
    const privacyHandler = () => {
        redirect('/privacy');
    }
    const faqHandler = () => {
        redirect('/faq');
    }
    const languageHandler = () => {
        toast.success("Website is in English")
    }
  return (
    <>
        <div className='min-h-70 bg-gray-950 text-white'>
            <div className="upper flex flex-col md:flex-row gap-8 md:gap-3 justify-between p-4 md:p-6">
                <div className='flex flex-col gap-3'>
                    <div className='h-[30%] flex justify-center md:justify-start items-center'>
                        <h2 className='font-bold text-xl md:text-2xl'>Company</h2>
                    </div>
                    <p className='hover:text-gray-400 hover:cursor-pointer text-center md:text-left' onClick={aboutHandler}>About Us</p>
                    <p className='hover:text-gray-400 hover:cursor-pointer text-center md:text-left' onClick={careerHandler}>Careers</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='h-[30%] flex justify-center md:justify-start items-center'>
                        <h2 className='font-bold text-xl md:text-2xl'>View Website in</h2>
                    </div>
                    <p className='hover:text-gray-400 hover:cursor-pointer text-center md:text-left' onClick={languageHandler}>English</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='h-[30%] flex justify-center md:justify-start items-center'>
                        <h2 className='font-bold text-xl md:text-2xl'>Need Help?</h2>
                    </div>
                    <p className='hover:text-gray-400 hover:cursor-pointer text-center md:text-left' onClick={helpHandler}>Visit Help Center</p>
                    <p className='hover:text-gray-400 hover:cursor-pointer text-center md:text-left'>Share Feedback</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='h-[30%] flex justify-center md:justify-start items-center'>
                        <h2 className='font-bold text-xl md:text-2xl'>Contact With Us</h2>
                    </div>
                    <div className='flex gap-5 px-2 justify-center md:justify-start'>
                        <FontAwesomeIcon icon={faFacebookF} className='h-5 md:h-6 w-5 md:w-6 hover:text-blue-700 hover:cursor-pointer'/>
                        <FontAwesomeIcon icon={faInstagram} className='h-5 md:h-6 w-5 md:w-6 hover:text-pink-600 hover:cursor-pointer'/>
                        <FontAwesomeIcon icon={faTwitter} className='h-5 md:h-6 w-5 md:w-6 hover:text-blue-400 hover:cursor-pointer'/>
                        <FontAwesomeIcon icon={faYoutube} className='h-5 md:h-6 w-5 md:w-6 hover:text-red-700 hover:cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className="lower flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-3 gap-4 md:gap-0">
                <div className='flex flex-col gap-1 items-center md:items-start'>
                    <p className='p-2 text-xs md:text-base'>© {new Date().getFullYear()} STAR. All Rights Reserved.</p>
                    <div className='flex flex-wrap gap-3 items-center text-xs md:text-base justify-center md:justify-start'>
                        <a href="#" className='hover:text-gray-400' onClick={termsHandler}>Terms Of Use</a>
                        <a href="#" className='hover:text-gray-400' onClick={privacyHandler}>Privacy Policy</a>
                        <a href="#" className='hover:text-gray-400' onClick={faqHandler}>FAQ</a>
                    </div>
                </div>
                <div className='flex gap-2 md:gap-4'>
                    <div className='flex justify-center items-center'>
                        <div className='bg-black flex justify-center items-center hover:scale-110 hover:cursor-pointer duration-200'>
                            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/v1661346101/google-playstore" alt="get it on playstore" className='h-8 md:h-12 rounded-full'/>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='bg-black flex justify-center items-center hover:scale-110 hover:cursor-pointer duration-200'>
                            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/v1661346071/ios-appstore" alt="get it on playstore" className='h-8 md:h-12 rounded-full'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
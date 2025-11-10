'use client';
import Image from 'next/image';
import React from 'react';

// Image
import signupImage from '../../../../public/icon/icons8-aircraft.png';

import firstImage from '../../../../public/marquee/image.webp';
import firstImage1 from '../../../../public/marquee/image1.webp';
import firstImage2 from '../../../../public/marquee/image2.webp';
import firstImage3 from '../../../../public/marquee/image3.webp';

// import
import Link from 'next/link';
import Slider from '../../../../components/dynamic/Slider';
import SocialLog from '../components/SocialLog';
import Divided from '../components/Divided';

const slides = [
  {
    id: 1, 
    image: firstImage,
    title: 'Discover New Destinations', 
    description: 'Explore hidden gems and popular travel spots around the world.'
  },
  {
    id: 2, 
    image: firstImage1,
    title: 'Discover New Destinations', 
    description: 'Explore hidden gems and popular travel spots around the world.'
  },
  {
    id: 3, 
    image: firstImage2,
    title: 'Discover New Destinations', 
    description: 'Explore hidden gems and popular travel spots around the world.'
  },
  {
    id: 4, 
    image: firstImage3,
    title: 'Discover New Destinations', 
    description: 'Explore hidden gems and popular travel spots around the world.'
  },
]

const Page = () => {
  return (
    <div className='w-full min-h-screen flex'>
      <div className='flex flex-col lg:flex-row w-full'>
        {/* Slider Section - Hidden on small and medium devices, visible only on large */}
        <div className='hidden lg:block w-full lg:w-1/2 h-screen sticky top-0'>
          <div className='w-full h-full'>
            <Slider slides={slides} />
          </div>
        </div>
        
        {/* Mobile & Medium Device Hero Section - Visible on small and medium devices */}
        <div className='lg:hidden w-full bg-gradient-to-br from-blue-50 to-orange-50 py-8 px-6'>
          <div className='text-center mb-6'>
            <div className='flex justify-center mb-4'>
              <Link href={'/'}>
                    <Image
                    src={signupImage}
                    alt='signup-image'
                    className='h-14 w-auto bg-black scale-x-[-1] rounded-lg p-2'
                    width={56}
                    height={56}
                  />
                </Link>
            </div>
            <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>Welcome to GoTrip</h1>
            <p className='text-gray-600 mt-2 text-base md:text-lg'>Start your adventure with us</p>
          </div>
          
          {/* Mobile & Medium device image grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mb-6'>
            <div className='rounded-lg overflow-hidden shadow-md'>
              <Image
                src={firstImage}
                alt='Travel destination 1'
                className='w-full h-32 md:h-40 object-cover'
              />
            </div>
            <div className='rounded-lg overflow-hidden shadow-md'>
              <Image
                src={firstImage1}
                alt='Travel destination 2'
                className='w-full h-32 md:h-40 object-cover'
              />
            </div>
            <div className='rounded-lg overflow-hidden shadow-md'>
              <Image
                src={firstImage2}
                alt='Travel destination 3'
                className='w-full h-32 md:h-40 object-cover'
              />
            </div>
            <div className='rounded-lg overflow-hidden shadow-md'>
              <Image
                src={firstImage3}
                alt='Travel destination 4'
                className='w-full h-32 md:h-40 object-cover'
              />
            </div>
          </div>
        </div>
        
        {/* Form Section - Scrollable */}
        <div className='w-full lg:w-1/2'>
          <div className='min-h-screen flex items-center justify-center p-6 md:p-10 lg:p-10 overflow-y-auto'>
            <div className='bg-white rounded-lg shadow-lg w-full my-auto'>
              <div className='p-6 md:p-10'>
                {/* Logo hidden on small & medium devices since it's in the hero section */}
                <div className='hidden lg:flex justify-center'>
                  <Link href={'/'}>
                    <Image
                    src={signupImage}
                    alt='signup-image'
                    className='h-14 w-auto bg-black scale-x-[-1] rounded-lg p-2'
                    width={56}
                    height={56}
                  />
                  </Link>
                </div>
                
                <div className='py-5 flex flex-col text-center gap-1.5'>
                  <h2 className='text-2xl md:text-3xl font-bold'>Welcome, Create your account</h2>
                  <h3 className='text-base md:text-lg font-semibold'>Start your adventure with GoTrip.</h3>
                </div>

                <form action="" className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='text-lg font-bold'>Name</label>
                    <input 
                      id="name"
                      type="text" 
                      placeholder='Enter your name' 
                      className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                      required
                    />
                  </div>

                  

                  {/* Additional fields to demonstrate scrolling */}
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="phone" className='text-lg font-bold'>Phone Number</label>
                    <input 
                      id="phone"
                      type="tel" 
                      placeholder='Enter your phone number' 
                      className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                    />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-lg font-bold'>Email</label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder='Enter your Email' 
                      className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                      required
                    />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label htmlFor="password" className='text-lg font-bold'>Password</label>
                    <input 
                      id="password"
                      type="password" 
                      placeholder='********' 
                      className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                      required
                    />
                  </div>


                  <div className='flex items-center gap-2'>
                    <input 
                      id="terms"
                      type="checkbox" 
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
                      required
                    />
                    <label htmlFor="terms" className='text-sm text-gray-700'>
                      I agree to the terms and conditions
                    </label>
                  </div>

                  <button 
                    type='submit' 
                    className='bg-black hover:bg-[#FA6741] text-white p-3 rounded-lg font-bold transition duration-300 cursor-pointer mt-3'
                  >
                    Sign Up
                  </button>
                </form>

                <Divided></Divided>

                <SocialLog></SocialLog>

                <p className='pt-5 text-sm text-center text-gray-500'>
                  By joining, you are agreeing to our{' '}
                  <span className='text-gray-800 hover:text-[#FA6741] transition duration-300'>
                    <Link href={'/'}>Terms</Link>
                  </span>{' '}
                  and{' '}
                  <span className='text-gray-800 hover:text-[#FA6741] transition duration-300'>
                    <Link href={'/'}>Privacy Policy</Link>
                  </span>
                </p>

                <div className='mt-6 text-center'>
                  <p className='text-gray-600'>
                    Already have an account?{' '}
                    <Link href="/SignIn" className='text-[#FA6741] hover:underline font-semibold'>
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Page;
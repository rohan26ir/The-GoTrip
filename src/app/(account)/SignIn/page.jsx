"use client";

import Lottie, { LottiePlayer } from "lottie-react";
import React from "react";
import Link from "next/link";

import signInAnimation from "../../../../public/lottie/login.json";
import signupImage from '../../../../public/icon/icons8-aircraft.png';
import Image from "next/image";
import SocialLog from "../components/SocialLog";
import Divided from "../components/Divided";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center min-h-[600px]">
            {/* Left side - Lottie Animation */}
            <div className="hidden lg:flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-orange-50 h-full">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  Welcome Back!
                </h2>
                <h3 className="text-lg text-gray-600 max-w-md">
                  Sign in to continue your journey with GoTrip and explore amazing destinations around the world.
                </h3>
              </div>

              <div className="w-full max-w-md">
                <Lottie
                  animationData={signInAnimation}
                  speed={0.5}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-8 text-center text-gray-500 text-sm">
                <p>Don't have an account? Start your adventure today!</p>
              </div>
            </div>

            {/* Mobile & Tablet Header - Only shown on small and medium devices */}
            <div className="lg:hidden w-full bg-gradient-to-br from-blue-50 to-orange-50 py-6 px-4">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src={signupImage}
                    alt="signup-image"
                    className="h-12 w-auto bg-[#FA6741] rounded-lg p-1"
                    width={48}
                    height={48}
                  />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome Back!
                </h1>
                <p className="text-gray-600">
                  Sign in to continue your GoTrip adventure
                </p>
              </div>
            </div>

            {/* Right side - Login Form */}
            <div className="p-6 md:p-8 lg:p-12">
              {/* Logo - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:flex justify-center mb-6">
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

              <div className='py-4 lg:py-6 flex flex-col text-center gap-2'>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
                  Sign In to Your Account
                </h2>
                <h3 className='text-base md:text-lg font-semibold text-gray-600'>
                  Enter your credentials to continue
                </h3>
              </div>

              <div className="space-y-6">
                <form className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-lg font-bold text-gray-700">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-lg font-bold text-gray-700">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                      required
                    />
                  </div>

                  {/* Remember me and Forgot password */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="flex items-center gap-2">
                      <input 
                        id="remember"
                        type="checkbox" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="remember" className="text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <Link 
                      href="/forgot-password" 
                      className="text-sm text-[#FA6741] hover:underline font-semibold"
                    >
                      Forgot your password?
                    </Link>
                  </div>

                  <button 
                    type='submit' 
                    className='w-full bg-black hover:bg-[#FA6741] text-white p-3 rounded-lg font-bold transition duration-300 cursor-pointer mt-2'
                  >
                    Sign In
                  </button>
                </form>

               <Divided></Divided>

                <SocialLog></SocialLog>

                {/* Sign up link */}
                <div className='mt-8 text-center'>
                  <p className='text-gray-600'>
                    Don't have an account?{' '}
                    <Link href="/signup" className='text-[#FA6741] hover:underline font-semibold'>
                      Sign Up
                    </Link>
                  </p>
                </div>

                {/* Terms and Privacy */}
                <p className='pt-4 text-xs text-center text-gray-500'>
                  By signing in, you are agreeing to our{' '}
                  <span className='text-gray-800 hover:text-[#FA6741] transition duration-300'>
                    <Link href={'/'}>Terms</Link>
                  </span>{' '}
                  and{' '}
                  <span className='text-gray-800 hover:text-[#FA6741] transition duration-300'>
                    <Link href={'/'}>Privacy Policy</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
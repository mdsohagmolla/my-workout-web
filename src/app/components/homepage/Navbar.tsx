'use client'

import React, { use } from 'react';
import logo from '@/app/asset/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import Planbutton from '../workoutDetails/Planbutton';
import Savedbutton from '../workoutDetails/Savedbutton';
import { usePathname } from 'next/navigation';


const Navbar = () => {

    const pathname = usePathname()
    const links = <>
        <li><Link href={'/'} className={`rounded-full px-7 py-3 text-base font-medium transition-all duration-200 ${pathname==="/"?"bg-[#172711] text-[#b6ff00]":"text-[#9CA3AF] hover:text-white"}`}>Workout</Link></li>
        <li><Link href={'/myplan'} className={`rounded-full px-7 py-3 text-base font-medium transition-all duration-200 ${pathname==="/myplan"?"bg-[#172711] text-[#b6ff00]":"text-[#9CA3AF] hover:text-white"}`}>My Plan</Link></li>
        


    </>


    return (
        <nav className='bg-black shadow-sm'>
            <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-soft lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
                <Image src={logo} alt='logo'></Image>
                <a className="text-white text-xl ml-2 font-semibold">FITLOG</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}

                </ul>
            </div>
            <div className="navbar-end gap-5">
                
               <Planbutton></Planbutton>
               <Savedbutton></Savedbutton>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
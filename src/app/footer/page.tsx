
import React from 'react';
import logo from '@/app/asset/logo.png' 
import Image from 'next/image';

const FooterPage = () => {
    return (

        <footer className="  bg-[#101216]">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-7 sm:flex-row">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src={logo} alt='logo'></Image>
                    <span className="text-lg text-[#b6ff00]"></span>

                    <span className="text-sm font-black tracking-wide text-white">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-center text-xs text-gray-500 sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default FooterPage;
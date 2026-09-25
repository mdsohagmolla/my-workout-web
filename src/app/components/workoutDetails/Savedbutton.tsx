'use client'
import { workoutContext } from '@/context/workoutContext';

import Link from 'next/link';
import React, { useContext } from 'react';

const Savedbutton = () => {

    const { save } = useContext(workoutContext)
    return  (
        // <Link href={'/myplan'}>
        // <button className='text-white'>{`Save (${save.length})`}</button>
        // </Link>

        <Link href={'/myplan'}>
            <button className='flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white'>Save
                <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[#b6ff00] text-xs font-black text-black'>{save.length}</span>
            </button>
            
        </Link>
    )
        
};

export default Savedbutton;
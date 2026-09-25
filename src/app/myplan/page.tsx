'use client'
import { workoutContext } from '@/context/workoutContext';
import  { useContext } from 'react';

const MyPlanPage = () => {

    const {plan, save}= useContext(workoutContext)
    console.log(plan, save, 'from plan page')
    return (
        <div>
            <h2 className='font-bold text-2xl'>My plan </h2>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
        </div>
    );
};

export default MyPlanPage;
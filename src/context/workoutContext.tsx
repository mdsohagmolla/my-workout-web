'use client'

import  { ReactNode, useState } from 'react';
import { createContext } from 'react';



 export const workoutContext = createContext({})





const WorkoutProvider = ({children}:{children:ReactNode}) => {
    const [plan, setPlan]= useState([])
const [save, setSave]= useState([])

const sharedData = {
    plan,
    setPlan,
    save,
    setSave,

}


    return <workoutContext.Provider value ={sharedData}>{children}</workoutContext.Provider>
};

export default WorkoutProvider;
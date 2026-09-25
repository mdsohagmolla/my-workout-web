'use client'

import { IWorkout } from '@/type/type';
import  { ReactNode, useState } from 'react';
import { createContext } from 'react';


type BooksContextType = {
  plan:IWorkout[];
  setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  save: IWorkout[];
  setSave: React.Dispatch<React.SetStateAction<IWorkout[]>>;
};

 export const workoutContext = createContext({} as BooksContextType) 





const WorkoutProvider = ({children}:{children:ReactNode}) => {
    const [plan, setPlan]= useState<IWorkout[]>([])
const [save, setSave]= useState<IWorkout[]>([])

const sharedData = {
    plan,
    setPlan,
    save,
    setSave,

}


    return <workoutContext.Provider value ={sharedData}>{children}</workoutContext.Provider>
};

export default WorkoutProvider;
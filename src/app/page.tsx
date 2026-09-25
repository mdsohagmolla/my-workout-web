import React from 'react';
import Bannar from './components/homepage/Bannar';
import WorkoutPage from './components/workout';
import Workout from './workout/page';


const page = () => {
  return (
    <div>
    <Bannar></Bannar>
    <Workout></Workout>   
    
    <WorkoutPage></WorkoutPage>

    
    </div>
  );
};

export default page;
import React, {useState} from "react";
import { DateTime, Info } from "luxon";
import Agenda from "./Agenda";

const weightliftingExercises: string[] = ["Bench press", "Squat", "Deadlift", "Overhead press", "Barbell row", "Dumbbell curl", "Tricep extension", "Leg press", "Romanian deadlift", "Lateral raise"];

interface WorkoutProps {
    exercise: string;
    isChecked: boolean;
  }
  
  const Workouts: React.FC = () => {
    const [exercises, setExercises] = useState<WorkoutProps[]>(() => {
      return weightliftingExercises.map((exercise) => ({
        exercise,
        isChecked: false,
      }));
    });
  
  const [selectedExercises, setSelectedExercises] = useState(' ');

    const handleCheck = (index: number) => {
      const newExercises = [...exercises];
      newExercises[index].isChecked = !newExercises[index].isChecked;
      setExercises(newExercises);
    };

    const handleAdd = () => {
      const selected = exercises
        .filter((exercise) => exercise.isChecked)
        .map((exercise) => exercise.exercise);
      
    };
  
    return (
      <div>
        <h2>Weightlifting Exercises</h2>
        {exercises.map((exercise, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={exercise.isChecked}
                onChange={() => handleCheck(index)}
              />
              {exercise.exercise}
            </label>
          </div>
        ))}
        <button onClick={handleAdd}>Add selected exercises to agenda</button>
      
      </div>
    );
  };
  
  export default Workouts;


//   New Fitness Tracker/Calendar??

// 1. User registration and login: The user would have to register with their email address or social media account to access the app. The user would have a profile page where they can set their fitness goals, input their physical information, and track their progress.
//  Something new I would have to learn. Creating accounts, storing data AND using multiple pages

// 2. Exercise library: The app would have a library of exercises categorized by muscle groups or fitness goals. The user would be able to choose exercises from the library to add to their fitness program. 
// Easy to do - can maybe look at something to generate different routines based on goals.

// 3. Fitness program creation: The user would be able to create a fitness program by selecting exercises from the exercise library and adding them to their calendar. The user would be able to set the frequency and duration of their workout sessions, as well as the intensity level. 
//Custom fitness plan makers that pulls items //

// 4. Calendar: The calendar would be the main feature of the app, displaying the user's fitness program, including the exercises to be performed each day and the duration of each session. The user would be able to view their calendar by day, week, or month. 
// Use code from Luxon on current calendar.//

// 5. Workout tracking: The user would be able to track their progress by logging their workout sessions. The app would record the exercises performed, the duration of the workout, and the number of sets and repetitions completed. The app may also provide suggestions for modifying the workout program based on the user's progress.
// The app can take data from either fitbit OR applewatch and use it (I own niether of the sort so wouldn't know too much about this..//

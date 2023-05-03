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
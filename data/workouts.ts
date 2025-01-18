interface Exercise {
  name: string;
  sets: number;
  reps: number | string;
  notes?: string;
}

interface Workout {
  name: string;
  description: string;
  exercises: Exercise[];
  category: 'Push' | 'Pull' | 'Legs' | 'Full Body';
}

export const exerciseData = [
  {
    name: 'Abs Kettlebell',
    link: 'https://hevy.com/workout/YvlCVsxAFdu',
  },
  {
    name: 'Chest Shoulders Triceps',
    link: 'https://hevy.com/routine/pde14Bj1JJI',
  },
  {
    name: 'Back and Biceps',
    link: 'https://hevy.com/routine/Dp0KoCvKhKr',
  },
  {
    name: 'Legs',
    link: 'https://hevy.com/routine/UMK3vJOoSS7',
  },
];

export const workouts: Workout[] = [
  {
    name: 'Push Day',
    description: 'Focus on chest, shoulders, and triceps',
    category: 'Push',
    exercises: [
      {
        name: 'Incline Dumbbell Press',
        sets: 4,
        reps: '8-12',
      },
      {
        name: 'Flat Bench Press',
        sets: 4,
        reps: '8-12',
      },
      {
        name: 'Machine Chest Press',
        sets: 3,
        reps: '12-15',
      },
      {
        name: 'Lateral Raises',
        sets: 4,
        reps: '12-15',
      },
      {
        name: 'Tricep Pushdowns',
        sets: 4,
        reps: '12-15',
      },
      {
        name: 'Overhead Tricep Extension',
        sets: 3,
        reps: '12-15',
      },
    ],
  },
  {
    name: 'Pull Day',
    description: 'Focus on back and biceps',
    category: 'Pull',
    exercises: [
      {
        name: 'Lat Pulldowns',
        sets: 4,
        reps: '10-12',
      },
      {
        name: 'Seated Cable Rows',
        sets: 4,
        reps: '10-12',
      },
      {
        name: 'Single Arm Dumbbell Rows',
        sets: 3,
        reps: '12-15',
      },
      {
        name: 'Face Pulls',
        sets: 3,
        reps: '15-20',
      },
      {
        name: 'Barbell Curls',
        sets: 4,
        reps: '10-12',
      },
      {
        name: 'Hammer Curls',
        sets: 3,
        reps: '12-15',
      },
    ],
  },
  {
    name: 'Leg Day',
    description: 'Focus on lower body strength and development',
    category: 'Legs',
    exercises: [
      {
        name: 'Barbell Squats',
        sets: 4,
        reps: '8-10',
      },
      {
        name: 'Romanian Deadlifts',
        sets: 4,
        reps: '10-12',
      },
      {
        name: 'Leg Press',
        sets: 3,
        reps: '12-15',
      },
      {
        name: 'Leg Extensions',
        sets: 3,
        reps: '15-20',
      },
      {
        name: 'Seated Leg Curls',
        sets: 3,
        reps: '12-15',
      },
      {
        name: 'Standing Calf Raises',
        sets: 4,
        reps: '15-20',
      },
    ],
  },
];

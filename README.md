# Fitness App Defaults

Helps generate default data for the main fitness app. Also used as a testing ground.

---

## Todos

### Default Workouts

- Chest #1
  - Warm-up
  - Bench Press
  - Incline Bench Press
  - Decline Bench Press
  - Cool-down
  - Stretching
- Back #1
  - Warm-up
  - Bent Over Rows
  - Stiff Leg Deadlift
  - Back Flyes
  - Cool-down
  - Stretching
- Legs #1
  - Warm-up
  - Leg Curls
  - Leg Extensions
  - Squats
  - Cool-down
  - Stretching
- Arms and Shoulders #1
  - Warm-up
  - Bicep Curls
  - Tricep Pulls
  - Front Arm Raises
  - Side Arm Raises
  - Diagonal Arm Raises
  - Shrugs
  - Cool-down
  - Stretching
- Core #1
  - Warm-up
  - Russian Twist
  - Torso Twist
  - Oblique Side Bends
  - Farmer's WAlk
  - Abdominal Crunch
  - Cool-down
  - Stretching

### Standard Tasks

- Add the default exercises to the workouts
  - NOTE: Might be easier to generate the workouts directly from the DEFAULT_EXERCISE constants
- Consider what methods each of your classes will need (especially container classes)
- Move all code to the Nuxt Fitness App and Test launch it
- Adapter/Wrapper pattern for data (storage)
- Classes for the defaults repo
  - Importer (JSON, CSV)
  - Exporter (JSON, CSV, PDF)
  - Report (breakdown)

    ```javascript
    {
      exportReport: {
        appVersion: Number,
        exporterVersion: Number,
        createdAt: Date,
        totalCategories: Number,
        totalEquipment: Number,
        totalWorkouts: Number,
        totalWorkoutRecords: Number,
        totalExercises: Number,
        totalExerciseRecords: Number,
      },
      categories: [],
      equipment: [],
      workouts: [],
      workoutRecords: [],
      exercises: [],
      exerciseRecords: [],
    }
    ```

- UI Classes for later
  - Timer class
  - WorkoutTimer class (for app later)
  - StaticTime class (for app later)
  - WorkoutSummary class (for app later)

### Slowly research and setup each

- Add basic UI for testing (html, css, js)
  - Tailwind CSS
- Local VSCode snippets, extensions, settings
- Generate defaults for fitness app (exercises & workouts)
- Markdownlint
- Stylelint
- Prettier
- ESLint
- Babel
- Husky
- Jest
- TypeScript
- Webpack
- Mock fitness app UX

---

## Data Storage Locations

### Database (Firebase, IndexedDB, Local Storage, etc.)

- users
- exercises
- workouts
- measurementRecords
- exerciseRecords
- workoutRecords

### Active Data (Local Storage)

- activeWorkout
- activeExerciseRecords

### App Store (Vuex, Redux, etc.)

- Combination of Database and Active Data
- Only load data into store as needed

---

## Class Outline

- ExercisePlan
- `_Id`
  - User
  - ExerciseSet
  - `_Record`
    - WorkoutRecord
    - ExerciseRecord
    - MeasurementRecord
  - `_Descriptors`
    - Exercise
    - Workout
- `_IdContainer`
  - ExerciseSetContainer
  - `_RecordContainer`
    - WorkoutRecordContainer
    - ExerciseRecordContainer
    - MeasurementRecordContainer
  - `_DescriptorsContainer`
    - ExerciseContainer
    - WorkoutContainer

---

## Unrelated Tasks

- Build a Vue CLI project and eject it to see how Webpack is setup
- Build a Hygen test project
- Build a TypeScript test project
- Build a boilerplate project for you to expand on

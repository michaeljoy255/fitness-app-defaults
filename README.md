# Fitness App Defaults

Helps generate default data for the main fitness app. Also used as a testing ground.

---

## Todos

### Slowly research and setup each

- Sort method for containers
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
- measurements
- exercises
- workouts
- exerciseRecords
- workoutRecords
- activeWorkout
- activeExercises

### Active Data (Local Storage)

- activeWorkout
- activeExerciseRecords

### App Store (Vuex, Redux, etc.)

- Combination of Database and Active Data
- Only load data into store as needed

---

## Importer / Exporter (JSON, CSV, PDF?)

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

___

## Unrelated Tasks

- Build a Vue CLI project and eject it to see how Webpack is setup
- Build a Hygen test project
- Build a TypeScript test project
- Build a boilerplate project for you to expand on

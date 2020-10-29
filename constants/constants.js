export const EXERCISE_CATEGORY = Object.freeze({
  arms: 'Arms',
  back: 'Back',
  biceps: 'Biceps',
  cardio: 'Cardio',
  chest: 'Chest',
  core: 'Core',
  legs: 'Legs',
  shoulders: 'Shoulders',
  triceps: 'Triceps',
  compound: 'Compound',
  conditioning: 'Conditioning',
  hiit: 'HIIT',
  event: 'Event',
  misc: 'Miscellaneous',
})

export const EQUIPMENT_TYPE = Object.freeze({
  barbell: 'Barbell',
  dumbbells: 'Dumbbells',
  cableMachine: 'Cable Machine',
  cardioMachine: 'Cardio Machine',
  weightMachine: 'Weight Machine',
  bodyWeight: 'Body Weight',
  bands: 'Resistance Bands',
  custom: 'Custom',
})

export const DEFAULT_DESCRIPTIONS = Object.freeze({
  lowVolume: 'Do 3-5 sets of 5-8 reps.',
  medVolume: 'Do 3-5 sets of 8-12 reps.',
  highVolume: 'Do 3-5 sets of 12-15 reps.',
  veryHighVolume: 'Do 3-5 sets of 15-20 reps.',
  braceCore: 'Brace your core.',
  warmup: 'Spend a few minutes warming up.',
  cooldown: 'Spend a few minutes cooling down.',
  stretching: 'Spend a few minutes stretching muscles you have or will use.',
  conditioning: 'Jumping jacks, mountain climbers, air squats, burpees, or high knees with or without weights.'
})

export const UNIT_PREF = Object.freeze({
  imperial: 'Imperial',
  metric: 'Metric',
})

export const UNIT_CONVERT = Object.freeze({
  kmToMile = 0.62137119,
  MileToKm = 1.609344,
  lbsToKg = 0.45359237,
  kgToLbs = 2.20462262185,
})

export const EXERCISE_NAME = Object.freeze({
  // CARDIO
  ELLIPTICAL_WARMUP: "Elliptical, Warmup",
  ELLIPTICAL_INTERVAL: "Elliptical, Intervals",
  STAIR_STEPPER: "Stair Stepper Machine",
  // MISC
  MISC_EXERCISE: "Miscellaneous Exercise",
  STRETCHING: "Stretching",
  // CHEST
  SMITH_FLAT_BENCH_PRESS: "Smith Flat Bench Press",
  SMITH_INCLINE_BENCH_PRESS: "Smith Incline Bench Press",
  SMITH_DECLINE_BENCH_PRESS: "Smith Decline Bench Press",
  DUMBBELL_FLAT_BENCH_PRESS: "Dumbbell Flat Bench Press",
  DUMBBELL_INCLINE_BENCH_PRESS: "Dumbbell Incline Bench Press",
  DUMBBELL_DECLINE_BENCH_PRESS: "Dumbbell Decline Bench Press",
  FLY_MACHINE_CHEST: "Fly Machine (Chest)",
  LAYING_OVERHEAD_STRAIGHT_ARMS: "Laying Overhead Straight Arms",
  CABLE_CHEST_SIDE_PULLS: "Cable Chest Side Pulls",
  // SHOULDERS
  DUMBBELL_SIDE_RAISES: "Dumbbell Side Raises",
  DUMBBELL_FRONT_RAISES: "Dumbbell Front Raises",
  DUMBBELL_FRONT_SIDE_RAISES: "Dumbbell Front & Side Raises",
  SHOULDER_PRESS_MACHINE: "Shoulder Press Machine",
  // TRICEPS
  SKULL_CRUSHERS: "Skull Crushers",
  STANDING_TRICEP_OVERHEAD_EXT: "Standing Tricep Overhead Extension",
  CABLE_TRICEP_PULLDOWNS: "Cable Tricep Pulldowns",
  TRICEP_PRESS_MACHINE: "Tricep Press Machine",
  // BACK
  SMITH_BENT_OVER_ROWS: "Smith Bent Over Rows",
  SMITH_SHRUGS: "Smith Shrugs",
  SMITH_STIFF_LEG_DEADLIFTS: "Smith Stiff Leg Deadlift",
  ASSISTED_PULL_UPS: "Assisted Pull-ups",
  SEATED_CABLE_PULLDOWNS: "Seated Cable Pulldowns",
  SEATED_CABLE_ROWS: "Seated Cable Rows",
  STANDING_T_ROWS: "Standing T-Rows",
  // BICEPS
  CABLE_OVERHAND_CURLS: "Cable Overhand Curls",
  CABLE_UNDERHAND_CURLS: "Cable Underhand Curls",
  CABLE_ROPE_CURLS: "Cable Rope Curls",
  DUMBBELL_OVERHAND_CURLS: "Dumbbell Overhand Curls",
  DUMBBELL_UNDERHAND_CURLS: "Dumbbell Underhand Curls",
  DUMBBELL_HAMMER_CURLS: "Dumbbell Hammer Curls",
  // LEGS
  LEG_PRESS_MACHINE: "Leg Press Machine",
  LEG_EXT_MACHINE: "Leg Extension Machine",
  LEG_CURL_MACHINE: "Leg Curl Machine",
  CALF_EXT_MACHINE: "Calf Extension Machine",
  STANDING_GLUTE_MACHINE: "Standing Glute Machine",
  HIP_ABDUCTION_MACHINE: "Hip Abduction (Out) Machine",
  HIP_ADDUCTION_MACHINE: "Hip Adduction (in) Machine",
  // CORE
  ABDOMINAL_CRUNCH_MACHINE: "Abdominal Crunch Machine",
  OBLIQUE_SIDE_BEND: "Oblique Side Bends"
})
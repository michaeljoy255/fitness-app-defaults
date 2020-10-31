export const UNIT_PREF = Object.freeze({
  imperial: 'Imperial',
  metric: 'Metric',
})

export const UNIT_CONVERT = Object.freeze({
  kmToMi: 0.62137119,
  miToKm: 1.609344,
  lbsToKg: 0.45359237,
  kgToLbs: 2.20462262185,
  cmToIn: null,
  inToCm: null,
})

export const REGEX = Object.freeze({})

export const LIMIT = Object.freeze({
  maxExercises: 5000,
  maxWorkouts: 500,
  nameLength: 50,
  descriptionLength: 300,
  noteLength: 300,
})

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
  dumbbell: 'Dumbbell',
  kettlebell: 'Kettlebell',
  machine: 'Machine',
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
  conditioning: 'Jumping jacks, mountain climbers, burpees, or other cardio exercise with or without weights.'
})

export const EXERCISE_NAME = Object.freeze({
  // CARDIO
  warmup: 'Warmup',
  cooldown: 'Cooldown',
  intervals: 'Intervals',
  conditioning: 'Conditioning',
  jumpingJacks: 'Jumping Jacks',
  mountainClimbers: 'Mountain Climbers',
  highKnees: 'High Knees',
  burpees: 'Burpees',
  standingCrunches: 'Standing Crunches',
  treadmill: 'Treadmill',
  elliptical: 'Elliptical',
  stairStepper: 'Stair Stepper',
  straightLunges: 'Straight Lunges',
  sideLunges: 'Side Lunges',
  // MISC
  stretching: 'Stretching',
  // CHEST
  benchPress: 'Bench Press',
  inclineBenchPress: 'Incline Bench Press',
  declineBenchPress: 'Decline Bench Press',
  chestFlys: 'Chest Flys',
  diamondPushups: 'Diamond Push-ups',
  militaryPushups: 'Military Push-ups',
  standardPushups: 'Standard Push-ups',
  widePushups: 'Wide Push-ups',
  pikePushups: 'Pike Push-ups',
  layingOverheadStraightArms: 'Laying Overhead Straight Arms',
  chestSidePulls: 'Chest Side Pulls',
  // SHOULDERS
  overheadPress: 'Overhead Press',
  diagonalArmRaises: 'Diagonal Arm Raises',
  sideArmRaises: 'Side Arm Raises',
  frontArmRaises: 'Front Arm Raises',
  frontSideArmRaises: 'Front and Side Arm Raises',
  threeWayArmRaises: '3-Way Arm Raises',
  shoulderShrugs: 'Shoulder Shrugs',
  // TRICEPS
  skullCrushers: 'Skull Crushers',
  tricepKickbacks: 'Tricep Kickbacks',
  tricepPulldowns: 'Tricep Pulldowns',
  tricepOverheadExt: 'Tricep Overhead Extentions',
  layingTricepExt: 'Laying Tricep Extension',
  // BACK
  bentOverBackFlys: 'Bent Over Back Flys',
  bentOverRows: 'Bent Over Rows',
  stiffLegDeadlift: 'Stiff Leg Deadlift',
  deadlift: 'Deadlift',
  widePullups: 'Wide Overhand Pull-ups',
  closePullups: 'Close Underhand Pull-ups',
  hammerPullups: 'Hammer Grip Pull-ups',
  facePulls: 'Face Pulls',
  tRows: 'T-Rows',
  // BICEPS
  overhandCurls: 'Overhand Bicep Curls',
  underhandCurls: 'Underhand Bicep Curls',
  hammerCurls: 'Hammer Bicep Curls',
  // LEGS
  squats: 'Squats',
  legCurls: 'Leg Curls',
  legExt: 'Leg Extensions',
  calfRaises: 'Calf Raises',
  hipThrusters: 'Hip Thrusters',
  // CORE
  obliqueSideBend: 'Oblique Side Bends',
  abdominalCrunch: 'Abdominal Crunch',
  russianTwist: 'Russian Twist',
})
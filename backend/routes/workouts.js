const express = require('express');
const {getWorkouts, getWorkout, createWorkout,
deleteWorkout,
updateWorkout
}=require('../controllers/workoutController')

// get all workouts
const router= express.Router();
router.get('/', getWorkouts)

// get a single workout
router.get('/:id',getWorkout)

/// POST a new workout
router.post('/', createWorkout)
// delete a workout
router.delete('/:id', deleteWorkout)

// update (patch)
router.patch('/:id', updateWorkout)

module.exports = router; 
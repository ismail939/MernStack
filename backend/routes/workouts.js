const express = require('express');
const {getWorkouts, getWorkout, createWorkout}=require('../controllers/workoutController')

// get all workouts
const router= express.Router();
router.get('/', getWorkouts)

// get a single workout
router.get('/:id',getWorkout)

/// POST a new workout
router.post('/', createWorkout)
// delete a workout
router.delete('/:id', (req, res)=>{
    res.json({mssg: 'DELETE a single workout'})
})

// update (patch)
router.patch('/:id', (req, res)=>{
    res.json({mssg: 'UPDATE a single workout'})
})

module.exports = router;
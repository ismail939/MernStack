require('dotenv').config()


const express=require('express');
const mongoose=require('mongoose')
const workoutRoutes = require('./routes/workouts');
// creating the app
const app = express()

// middleware
app.use(express.json()); // if there is a req with a body it looks in this body and attaches that body to the req object
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes , react to the request
app.use('/api/workouts', workoutRoutes); 
// app.get('/', (req, res)=>{
//     res.json({mssg: 'Welcome to the hunter'})
// })


//listen for the request
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.port, ()=>{
        console.log('listening on port ', process.env.port)
    }) 
})
.catch((error)=>{
    console.log(error)
})

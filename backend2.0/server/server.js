const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors('*'))

app.use(express.json());

const routerImages = require('./routes/images');
const PlanImages = require('./routes/PlanImages');
const MemberImages = require('./routes/MemberImages');
const TrainerImages = require('./routes/TrainerImages');

app.use('/images',routerImages);
app.use('/planimages',PlanImages);
app.use('/trainerimages',TrainerImages);
app.use('/memberimages',MemberImages);

// static routing
// any file in uploads directory does not require any route
// express will simply return any file from uploads directory
app.use(express.static('uploads'))

app.listen(4001,()=>{
    console.log("Server started on port 4001");
})
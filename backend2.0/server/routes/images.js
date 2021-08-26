const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../dbutils/dbutils');
const upload = multer({dest: 'uploads/'});
const { response } = require('express')
const utils = require('../utils/utils')
console.log(db.eventNames);


router.post('/upload',upload.single('thumbnail'),(request, response) =>{
    const {title,artistId,albumId,duration,newtitle} = request.body;
    const filename = request.file.filename;
    const query = `UPDATE song set title = "${newtitle}",artistId = ${artistId},albumId = ${albumId},
                   duration = "${duration}",thumbnail = "${filename}" WHERE title = "${title}"`;
    const query2 = `INSERT INTO images (filename) VALUES ('${filename}')`
    console.log(query2);
    db.query(query2,(error,data)=>{
        response.send(utils.CreateResult(error,data));
    }) 
})


router.get('/download/:id',(request, response) =>{
    //const {id} = request.body;
    // console.log(id);
    // const id = request.query.id;
    const { id } = request.params;
    console.log(id);
    // const filename = request.file.filename;
    // const query = `UPDATE song set title = "${newtitle}",artistId = ${artistId},albumId = ${albumId},
    //                duration = "${duration}",thumbnail = "${filename}" WHERE title = "${title}"`;
    // const query2 = `INSERT INTO images (filename) VALUES ('${filename}')`
    const query3 = `SELECT filename FROM images WHERE i_id = ('${id}')`
    console.log(query3);
    db.query(query3,(error,data)=>{
        response.send(utils.CreateResult(error,data));
    }) 
})

module.exports = router;
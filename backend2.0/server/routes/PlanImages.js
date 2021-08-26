const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../dbutils/dbutils');
const upload = multer({dest: 'uploads/'});
const { response } = require('express')
const utils = require('../utils/utils')
console.log(db.eventNames);


router.post('/upload/:id', upload.single('memberimage'), (request, response) => {
    const id = request.params.id;
    const filename = request.file.filename;
    const query = `UPDATE plans SET pl_image = ('${filename}') where pl_id = ${id}` ;
    console.log(query);
    db.query(query, (err,data) => {
        response.send(utils.CreateResult(err, data));
    })
})


router.get('/download/:id', (request, response) =>{
    const id = request.params.id;
    const query = `SELECT pl_image FROM plans WHERE pl_id = '${id}'`
    console.log(query);
    db.query(query, (err,data) => {
        response.send(utils.CreateResult(err, data));
    })
})
module.exports = router;
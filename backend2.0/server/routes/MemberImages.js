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
    const query = `UPDATE members SET m_image = ('${filename}') where m_id = ${id}` ;
    console.log(query);
    db.query(query, (err,data) => {
        response.send(utils.CreateResult(err, data));
    })
})


router.get('/download/:id', (request, response) =>{
    const id = request.params.id;
    const query = `SELECT m_image FROM members WHERE m_id = '${id}'`
    console.log(query);
    db.query(query, (err,data) => {
        response.send(utils.CreateResult(err, data));
    })
})
module.exports = router;
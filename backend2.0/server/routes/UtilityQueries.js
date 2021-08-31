const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../dbutils/dbutils');
const upload = multer({dest: 'uploads/'});
const { response } = require('express')
const utils = require('../utils/utils')
console.log(db.eventNames);



router.get('/revenue/', (request, response) =>{
    const query = `select SUM(p_amount) as sum from payments;`
    console.log(query);
    db.query(query, (err,data) => {
        response.send(utils.CreateResult(err, data));
    })
})

router.get('/costs/', (request, response) =>{
    const query = `select SUM(e_cost) as cost from equipments;`
    console.log(query);
    db.query(query, (err,data) => {
        response.send(utils.CreateResult(err, data));
    })
})

router.get('/newjoinings/', (request, response) =>{
    const query = `select COUNT(m_id) as count from members where DATEDIFF(curdate(),m_joindate) < 30;`
    console.log(query);
    db.query(query, (err,data) => {
        response.send(utils.CreateResult(err, data));
    })
})


router.get('/totmembersinplan/', (request, response) =>{
    const query = `select p.pl_id as pid, p.pl_name as pname, p.pl_desc as pdesc, p.pl_cost as pcost,
                     p.pl_image as pimage, p.t_id , COUNT(m.m_id) as count from plans p 
                    left outer join members m on p.pl_id = m.pl_id GROUP BY p.pl_id;`
    console.log(query);
    db.query(query, (err,data) => {
        response.send(utils.CreateResult(err, data));
    })
})


router.get('/gethealthdata/:id', (request, response) =>{
    const {id} = request.params;
    const query = `select * from hdata where m_id = ${id};`
    console.log(query);
    db.query(query, (err,data) => {
        response.send(utils.CreateResult(err, data));
    })
})

module.exports = router;
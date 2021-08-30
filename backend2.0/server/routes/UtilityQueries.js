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
    const query = `select p.pl_id, p.pl_name, p.pl_desc, p.pl_cost, p.pl_image, p.t_id, COUNT(m.m_id) from plans p 
                    left outer join members m on p.pl_id = m.pl_id GROUP BY p.pl_id;`
    console.log(query);
    db.query(query, (err,data) => {
        response.send(utils.CreateResult(err, data));
    })
})

module.exports = router;
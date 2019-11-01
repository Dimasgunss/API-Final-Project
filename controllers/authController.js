const db = require('../database')

module.exports = {

    getData: (req, res) => {
        db.query(`select * from users where username = "${req.query.username}" and email = "${req.query.email}"`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }, 
    
    login: (req, res) => {
        console.log(`select * from users where username ='${req.query.username}' and password = '${req.query.password}'`);
       
        db.query(`select * from users where username ='${req.query.username}' and password = '${req.query.password}'`, (err, result) => {
            if (err) throw err
            console.log(req.body)
            res.send(result)
        })
    },
    register: (req, res) => {
        db.query(`insert into users(username, password, email) values ("${req.body.username}","${req.body.password}","${req.body.email}")`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    addProduct: (req, res) => {
        db.query(`insert into list values (0, "${req.body.name}", "${req.body.description}", ${req.body.price}, "${req.body.picture}") `, (err, result) => {
            if(err) throw err 
            res.send(result)
            console.log(result);
            
        })
    },

    getProduct: (req,res) => {
        db.query(`select * from list` , (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },

    updateProduct: (req,res) => {
        console.log(req.body)
        db.query(`update list set name="${req.body.name}", description="${req.body.description}", price=${req.body.price}, picture="${req.body.picture}" where id=${req.query.id}`, (err,result) => {
            try {
            if(err) throw err
            res.send(result)
            } catch (error) {
                console.log(error)
            }
        })
    },

    getProductDetail: (req, res) => {
        db.query(`select * from manage_product where id = ${req.query.id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        } )
    },




    
 }






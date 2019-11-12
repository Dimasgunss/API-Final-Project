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
        // db.query(`select * from users` , (err, result) => {
        //     try{
        //         if(err) throw err
        //          res.send(result)
        //     }catch(err){
        //         console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        //     }
            
        // })

        db.query(`select * from list`, (err,result) => {
            if(err)throw err
            res.send(result)
        })
    },

    updateProduct: (req,res) => {
        console.log(req.body)
        db.query(`update list set name="${req.body.name}", description="${req.body.description}", price=${req.body.price}, picture="${req.body.picture}" 
        where id=${req.query.id}`, (err,result) => {
            try {
            if(err) throw err
            res.send(result)
            } catch (error) {
                console.log(error)
            }
        })
    },  

    getProductDetail: (req, res) => {
        db.query(`select * from list where id = ${req.query.id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        } )
    },

    postAddToCarts: (req,res) => {
        console.log(req.body);
        
        db.query(`insert into carts values (0, ${req.body.productId}, ${req.body.userId}, ${req.body.qty})`, 
        (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    getDataCarts: (req, res) => {
        console.log(req.query);
        
        db.query(`select * from carts as c join list as l on c.productId = l.id where userId = ${req.query.userId}`, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },

    deleteCartsProduct: (req,res) => {
        console.log(req.body.id);
        
        db.query(`delete from carts where cartId = ${req.body.id}`, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },

    searchProduct: (req,res) => {
        console.log(req.query)
        let sql = `select * from list`
        let { query } = req
        if(query){
            sql += ` where`

            if(query.input){
                sql += ` name like '%${query.input}%'`
            }
        }
        db.query(sql, (err, result) => {
            try{
                if(err) throw err
                res.send(result)
            }catch(err) {
                console.log(err);
                
            }
        })
    },

    inputSubs: (req, res) => {
        db.query(`insert into transaksi (id, totalharga, totalbarang, status, bukti, namarekening, userId) values (0, ${req.body.totalharga}, ${req.body.totalbarang},"0", '${req.file.filename}','${req.body.namarekening}', ${req.body.id_user})`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }, 

    getTahun1: (req, res) => {
        db.query(`select * from list where tahun 2017`, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },

    getTahun2: (req, res) => {
        db.query(`select * from list where tahun 2018`, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },

    getTahun3: (req, res) => {
        db.query(`select * from list where tahun 2019`, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    }


 }







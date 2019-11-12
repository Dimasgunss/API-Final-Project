var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var multer = require('multer')
var mysql = require('mysql')

const port = 2001
const {authRouter} = require('./routers')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'project_akhir'
})

app.use(bodyParser.json())
app.use(cors())
app.use('/files', express.static('uploadImage'))

    let multerStorageConfig = multer.diskStorage({
            destination : (req, file, cb) => {
                cb(null, '.uploadImage')
            },
            filename : (req, file, cb) => {
                cb(null, )
            }
    })

app.get('/', (req, res) => {
    res.send('Success')
})

app.use('/auth', authRouter)



app.listen(port, console.log("Listening in port " + port))  
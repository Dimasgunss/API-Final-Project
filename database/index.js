var mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    password: 'password',
    database: 'project_akhir',
    host: 'localhost'
})

module.exports = db
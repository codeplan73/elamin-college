// const mysql = require('mysql2/promise')
const mysql2 = require('mysql2')

function ConnectDB() {
  db = mysql2.createConnection({
    host: '127.0.0.1',
    port: '3308',
    user: 'root',
    password: '',
    database: 'hira_test',
  })
}

// const connect = async () => {
//   const db1 = await mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'test',
//   })
// }

// export const db = mysql2.createConnection({
//   host: '127.0.0.1',
//   port: '3308',
//   user: 'root',
//   password: '',
//   database: 'hira_test',
// })

// const connectDB = () => {
//   db = mysql2.createConnection({
//     host: '127.0.0.1',
//     port: '3308',
//     user: 'root',
//     password: '',
//     database: 'hira_test',
//   })
// }

module.exports = {
  ConnectDB
}

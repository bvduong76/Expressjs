class MySQL {

  constructor() {
    this.con = null;
    this.connect();
  }

  connect() {
    if (this.con)
      return this.con;
    const mysql = require('mysql'),
      connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'test'
      });
    connection.connect();
    this.con = connection;
    return this.con;
  }

  query(sql, args) {
    return new Promise((resolve,reject)=>{
      this.con.query(sql, [args], function (err, data) {
      if(err){
        return reject(err);
      }
      return resolve(data);
      
      });
    })
  }
}
const sql = new MySQL();
module.exports = sql.query.bind(sql);
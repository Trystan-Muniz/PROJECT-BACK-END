const pgp = require('pg-promise')()
// Line below loads the environment variables in
require('dotenv').config()


const cn = {
    
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        user: process.env.PG_USER,
        database: process.env.PG_DATABASE,
        password: process.env.PG_PASSWORD

}

// We assign pgp(cn) to a variable bc it holds our connection to the database.
const db = pgp(cn)
db.connect()
  .then((cn) => {
    const { user, host, port, database } = cn.client;
    console.log(
      "\x1b[90m" +
        `Postgres connection established with user:${user}, host:${host}, port:${port}, database:${database}` +
        "\x1b[0m"
    );
    cn.done();
  })
  .catch((error) => console.log("database connection error", error));

module.exports = db;
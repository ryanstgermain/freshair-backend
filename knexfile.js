// // Update with your config settings.

// module.exports = {

//   development: {
//     client: 'pg',
//     connection: 'postgresql://localhost/freshair_db'
//   },

//   production: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL
//   }

// };

require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'freshair_db',
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    }
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
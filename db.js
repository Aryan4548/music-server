const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'mysql-192916fa-muci.e.aivencloud.com',
  user: 'avnadmin',
  password: 'AVNS_4x5z6uhmNpHi05jOY0W',
  database: 'defaultdb',
  port: 26980,
  ssl: {
    rejectUnauthorized: false
  }
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err);
  } else {
    console.log('✅ Connected to Aiven MySQL');
  }
});

module.exports = db;

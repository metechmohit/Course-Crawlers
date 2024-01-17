const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mohit&2294',
  database: 'course_data'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.get('/getData', (req, res) => {
    connection.query('SELECT * FROM course_table ', (err, results) => {
      if (err) {
        console.error('Error fetching data from MySQL:', err);
        res.status(500).send('Error fetching data from MySQL');
      } else {
        res.json(results);
      }
    });
  });
  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

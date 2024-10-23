const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql2');

const app = express();
const port = 3000;


app.use(bodyParser.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'lab2_q2_cse441'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:    ', err);
        return;
    }
    console.log('Connected to MySql database')
});

app.post('/api/users', (req, res) => {
    const user = req.body;
    const sql = 'INSERT INTO users SET ?';

    db.query(sql, user, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error creating user', error: err });
        } else {
            res.status(201).json({ message: 'User created' });
        }
    });
});

// 2. Get all users (GET request) 
app.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error fetching users', error: err });
        } else {
            res.json(results);
        }

    });


});


// 3. Get a specific user by ID (GET request) 
app.get('/api/users/:email', (req, res) => {
    const userEmail = req.params.email;
    const sql = 'SELECT * FROM users WHERE email like ?';
    db.query(sql, [req.params.email], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error fetching user', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json(results[0]);
        }
    });
});
// 4. Update a user by ID (PUT request) 
app.put('/api/users/:email', (req, res) => {
    const sql = 'UPDATE users SET ? WHERE email = ?';
    db.query(sql, [req.body, req.params.email], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error updating user', error: err });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
        }
        res.json({ message: 'User updated' });
    });
});


app.delete('/api/users/:email', (req, res) => {
    const userEmail = req.params.email;
   
    const sql = 'Delete from users WHERE email = ?';
    db.query(sql, [userEmail], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error deleting user', error: err });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json({ message: 'User updated' });
        }
    });
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

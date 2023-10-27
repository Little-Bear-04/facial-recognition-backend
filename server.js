const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

// const register = require('./Controllers/register');
import { handleRegister } from './Controllers/register';
const signin = require('./Controllers/signin');
const profile = require('./Controllers/profile');
const image = require('./Controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.https://facial-recognition-back-end.onrender.com,
        ssl: {rejectUnauthorized: false},
        host : 'dpg-ckt8erm5or3s73d0tsfg-a.frankfurt-postgres.render.com',
        port: 5432,
        user : 'VcPutTgyQfX2lRIhsEBGbtYuh78j95N2',
        password : 'VcPutTgyQfX2lRIhsEBGbtYuh78j95N2',
        database : 'VcPutTgyQfX2lRIhsEBGbtYuh78j95N2'
    }
});

const app = express ();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send(db.users) })

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfilGet(req, res, db) })
app.put('/image', (req, res) => { image.handleImage(req, res, db) })
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

app.listen() => {
    console.log('App is running on port 3000!');
}

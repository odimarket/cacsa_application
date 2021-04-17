const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const db = require('./config/db');
const cookieParser = require('cookie-parser');

// const Offices = require('./models/Offices');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('combined'));
app.use(cors());

// cookieParser middleware
// app.use(cookieParser()); 

// Test DB Connection
db.authenticate()
    .then(() => console.log('Database connected!'))
    .catch(err => console.log('Error: ' + err))


// Offices.sync({force: true});

require('./routes')(app);

if(process.env.NODE_ENV === 'production'){
app.use(express.static(__dirname + '/dist/'));

app.get(/.*/, (req, res) => res.sendFile(__dirname+'/dist/index.html'))
}

const port = process.env.PORT || 8081;

// console.log(__dirname);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
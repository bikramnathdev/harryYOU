const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
// middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>res.send("API RUNNING"));

// define routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('mongodb connected');
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

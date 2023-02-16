const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//port
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
//request to public folder
app.use(express.static('public'));


// Use routes folder for api and html
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
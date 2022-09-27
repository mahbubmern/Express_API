const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();

const customerRoutes = require('./routes/customerRoute');
const productRoutes = require('./routes/productRoute');
const catagoryRoutes = require('./routes/catagoryRoute');
const tagRoutes = require('./routes/tagRoute');

//express init
const app = express();
//port
const port = process.env.PORT || 5000;
//data manage
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/customer', customerRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/catagory', catagoryRoutes);
app.use('/api/v1/tag', tagRoutes);

//listen

app.listen(port, (req, res) => {
	console.log(`server is running on port ${port}`.bgGreen.black);
});

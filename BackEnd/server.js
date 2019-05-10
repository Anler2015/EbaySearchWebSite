var express = require("express");
var app = express();
var cors = require("cors");
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/dist')));
var searchProductRouter = require('./routes/searchProduct');
var productDetailsRouter = require('./routes/productDetails');
var googlePhotosRouter = require( './routes/googlePhotos');
var similarProductsRouter = require('./routes/similarProducts');
var autoCompleteRouter = require('./routes/autoComplete');
app.use('/searchProduct', searchProductRouter);
app.use('/productDetails',productDetailsRouter);
app.use('/googlePhotos',googlePhotosRouter);
app.use('/similarProducts',similarProductsRouter);
app.use('/autoComplete',autoCompleteRouter);


app.listen(8081, (req,res) => {
    console.log('server start');
});
//module.exports = app;

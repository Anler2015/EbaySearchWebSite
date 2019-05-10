const express = require('express');
const router = express.Router();
const axios = require('axios');

let baseURL = "https://www.googleapis.com/customsearch/v1?q=";
let apiKey = 'AIzaSyBwOEucUyO9HXShBOXUKjAybouhA8xDGTI';
let engineID = '009836387300336509873:otatoelzc-0';
router.get('/:productTitle', (req, res, next) => {
     let productTitle = decodeURIComponent(req.params.productTitle);
    // let input = decodeURI(req.params.productTitle);
    // let inputJson = JSON.parse(input);
    console.log(productTitle);
    let url = baseURL + encodeURI(productTitle)
        + '&cx=' + engineID + '&imgSize=huge&imgType=news&num=8&searchType=image'
        + '&key='+ apiKey ;
    console.log(url);

    //res.send(inputJson);
    axios.get(url)
        .then(function (response) {
            //console.log(response.data);
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

});

module.exports = router;

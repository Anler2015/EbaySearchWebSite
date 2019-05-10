const express = require('express');
const router = express.Router();
const axios = require('axios');

let baseURL = "http://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems&SERVICE-NAME=MerchandisingService&SERVICE-VERSION=1.1.0&CONSUMER-ID=JiahuiGe-CS571HW6-PRD-116e081a6-14170061&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemId=";
router.get('/:productId', (req, res, next) => {
    let productId = req.params.productId;
    let url = baseURL + productId + "&maxResults=20";
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

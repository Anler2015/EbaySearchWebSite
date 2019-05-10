const express = require('express');
const router = express.Router();
const axios = require('axios');

let baseURL = "http://open.api.ebay.com/shopping?callname=GetSingleItem&responseencoding=JSON&appid=JiahuiGe-CS571HW6-PRD-116e081a6-14170061&siteid=0&version=967&ItemID=";
router.get('/:productId', (req, res, next) => {
    let productId = req.params.productId;

    let url = baseURL + productId + "&IncludeSelector=Description,Details,ItemSpecifics";
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

const express = require('express');
const router = express.Router();
const axios = require('axios');

let baseURL = "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=JiahuiGe-CS571HW6-PRD-116e081a6-14170061&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=50&keywords=";

router.get('/:searchInput', (req, res, next) => {
    let input = decodeURI(req.params.searchInput);
    let inputJson = JSON.parse(input);
    let i = 0;
    //console.log(inputJson);
    let url = baseURL + inputJson.keyword;
    if (inputJson.category !== "") {
        url += "&categoryId=" + inputJson.category;
    }
    url += "&buyerPostalCode=" + inputJson.zipcode + "&itemFilter("+ i +").name=MaxDistance&itemFilter(" + i + ").value=" + inputJson.distance;
    i++;
    if (inputJson.local === true) {
        url += "&itemFilter("+ i +").name=LocalPickupOnly&itemFilter("+ i +").value=true";
        i++;
    }
    if (inputJson.shipping === true) {
        url += "&itemFilter("+ i +").name=FreeShippingOnly&itemFilter("+ i +").value=true";
        i++;
    }
    url += "&itemFilter("+ i +").name=HideDuplicateItems&itemFilter("+ i +").value=true";
    i++;
    if (inputJson.condition.length !== 0 ) {
        url += "&itemFilter("+ i +").name=Condition";
        for (let j = 0; j< inputJson.condition.length;j++) {
            url += "&itemFilter("+ i +").value("+ j +")=" + inputJson.condition[j];
        }
        i++;
    }
    url += "&outputSelector(0)=SellerInfo&outputSelector(1)=StoreInfo";
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

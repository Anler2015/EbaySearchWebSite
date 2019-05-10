const express = require('express');
const router = express.Router();
const axios = require('axios');

let baseURL = "http://api.geonames.org/postalCodeSearchJSON?postalcode_startsWith=";
router.get('/:code', (req, res, next) => {
    let code = req.params.code;

    let url = baseURL + code + "&username=annnnler1993&country=US&maxRows=5";
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

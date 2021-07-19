const axios = require("axios");
const { json } = require("express");

function dataPull() 
{
    let jsonData;
    const driverData = {'position': [],
                        'drivers': [],
                        'Constructor/Team': [],
                        'Time': []
                        }
    axios({
        method:"GET",
        url: "https://ergast.com/api/f1/current/last/results.json",
    })

    .then(function(response) {
        jsonData = response.data;
        // console.log(response.data)

        for(test in jsonData["MRData"]["RaceTable"]["Races"][0]["Results"]) {
            // driverData.drivers.push(test["Driver"]["driverId"]);
        }
    })
}

module.exports = { dataPull };
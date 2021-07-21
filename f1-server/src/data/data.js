const axios = require("axios");

function dataPull() 
{
    let jsonData;
    const driverData = {'position': [],
                        'drivers': [],
                        'Constructor/Team': [],
                        'Time': []
                        }
    axios({
        method:"POST",
        url: "http://ergast.com/api/f1/current/last/results.json?",
        respnseType: 'json'
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
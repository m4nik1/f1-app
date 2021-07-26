const axios = require("axios");

async function dataPull() 
{
    const driverData = {'position': [],
                        'drivers': [],
                        'Constructor/Team': [],
                        'Time': []
                        }

    try {
        const res = await axios.get("http://ergast.com/api/f1/current/last/results.json")

        let results = res.data["MRData"]["RaceTable"]["Races"][0]["Results"];

        for(drivers of results)
        {
            driverData["drivers"].push(drivers["Driver"]["driverId"])
            driverData["position"].push(drivers["position"])
            driverData["Constructor/Team"].push(drivers["Constructor"]["constructorId"])
            if(drivers["Time"])
            {
                driverData["Time"].push(drivers["Time"])
            }
            else {
                driverData["Time"].push("NA")
            }
        }
        console.log(driverData)

    } catch (error) {
        console.log("THERE IS AN ERROR!!!")
        console.error(error)
    }
}

module.exports = { dataPull };
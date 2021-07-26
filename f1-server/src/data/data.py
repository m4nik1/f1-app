import requests
from fastapi import FastAPI
import pandas as pd


app = FastAPI()
silverStoneData = {"Position": [], "drivers": [], "Team": [], "Time": []}
drivers = []

url = "https://ergast.com/api/f1/current/last/results.json"
r = requests.get(url)
json = r.json()
data = json["MRData"]["RaceTable"]["Races"][0]["Results"][0]
print(data)

for item in json["MRData"]["RaceTable"]["Races"][0]["Results"]:
    # silverStoneData["Position"].append(item["position"])
    # silverStoneData["drivers"].append(item["Driver"]["driverId"])
    # silverStoneData["Team"].append(item["Constructor"]["constructorId"])
    # try:
    #     silverStoneData["Time"].append(item["Time"]["time"])
    # except:
    #     silverStoneData["Time"].append("No Time")
    print("hello")

# silverStone = pd.DataFrame(silverStoneData)
# print(silverStone)
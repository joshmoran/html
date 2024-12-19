# Weather App - Frontend 

> This is the backend programming for a weather app and is intended to be used along side one another 
[Weather App Backend - Github](https://github.com/joshmoran/weather_app-back_end)

# Index 
1. Getting started with this project 
2. Overview and Features

# 1. Getting started with the project 
To successfully run the program, please follow these steps:
1. rename 'env-template' to '.env'
2. Edit and change the '.env' file to the desired values
   - REACT_APP_BASE_URL = url for the react app
     - e.g. "127.0.0.1:3000"
   - REACT_APP_NODE_URL = url for the backend app
     - e.g. "127.0.0.1:30001"
     - This should match the "PORT" in the .env within the backend 
3. In a terminal run, "npm install"
4. then "npm start"

# 2. Overview and Features
## Overview
- Once the backend and frontend are running, the initial screen will welcome the user and ask them to enter a city and their measurement
- At the top of the page is a 'search for weather' header with an input box for the city name, a measurement option and submit 
- The user enter a city, selects their measurement and then submit
  - If a city is not found, an error saying 'City not found, please try again'
  - If a city is found, The city name is sent to the backend which queries it through OpenWeather and the data is returned in JSON formatting which is presented to the user in a stylish format, which makes it easier to read

## Features 
> Each section has an icon for each category

> Weather OVerview for a city is as follows:

- Quick Overview 
  - Description
  - Current Temperature
  - Weather Icon (dynamically changes based on the weather itself)
- Sun 
  - Rise time
  - Set time
- Temperature 
  - Feels like 
  - Temperature 
  - Minimum temperature 
  - Maximum temperature
- Wind
  - Direction ( e.g. west, east etc)
  - Speed
  - Clouds viability
- Air quality
  - Visibility 
  - Pressure 
  - Humidity
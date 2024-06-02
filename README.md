
Weather API Application Documentation

Overview

The Weather API Application is a full-stack project developed using the MERN (MongoDB, Express.js, React, Node.js) stack. This application allows users to search for weather information for any location and saves the search results in the backend. Users can also view their search history in a tabular format, with options to filter and see detailed weather information.


Features

Search Weather: Users can search for current weather information by entering a city name.
Save Weather Results: Each search result is saved in the backend database for future reference.
Weather History: A table displaying the history of weather searches, with options to filter and view detailed information.

Technologies Used

Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Weather API: openWeatherAPI




Get Started:
To get started with MERN-SparkleNote, follow these simple steps:

1) Clone the Repository:
Clone the MERN-SparkleNote repository to your local machine using the following command:

git clone [https://github.com/mohammedmuneesh1/MERN-WeatherApp.git]


2) Navigate to the Project Directory:
Open the MERN-SparkleNote Folder in VsCode and open two terminal for running frontend and backend 
use cd command for setting the terminal path 
example: cd Frontend  ,  cd Backend


3) Install Dependencies:
Install the project dependencies by running the following command:

npm install on both terminal

4) Set Up Environment Variables:

Create a .env file inside both folder 

on client side 
create .env 
REACT_APP_BASE_URL = "http://localhost:4000/api/weather"

on Server side 
create another .env file 
create following fields

WEATHER_API = https://api.openweathermap.org/data/2.5/weather?units=metric&appid=db81952e32455d09e7859b55479af391
PORT = 4000
DB_URL = mongodb+srv://mblogx4u:OwDBbAe3V0myjzWT@weatherhub.i0nz3hz.mongodb.net/?retryWrites=true&w=majority&appName=WeatherHub


6)Start the Development Server:
Start the development server by running the following command:
Run both terminal with following comman:
npm start

Access MERN-WeatherAPI:
Once the development server is running, open a web browser and navigate to the following URL:

http://localhost:3000
You should now be able to access MERN-SparkleNote and start using its features.

#Thank you for Reading. All the best

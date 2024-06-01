const timeConvert = require("moment-timezone")
const weatherCollection = require("../Models/weatherCollection")
const imageCollection = require("../Models/imageCollection");



//----------------------------------FETCHING CITY WEATHER------------------------------------------------------
async function fetchApi(req,res){
    const {cityName} = req.body;
    const fetchData = await fetch(`${process.env.WEATHER_API}&q=${cityName}`)
    const  jsonData= await fetchData.json();
    if (jsonData.cod !== 200) {
        return res.status(Number(jsonData.cod)).json({ status: "Failure", message: jsonData.message });
    }
    let imageData = await imageCollection.findOne({weatherType:(jsonData.weather[0].main.toLowerCase())}).select("imageUrl -_id ")
    const data = await weatherCollection({
        name:jsonData.name,
        country:jsonData.country,
        sunTimeDetails:{
            sunrise:timeConvert.unix(jsonData.sys.sunrise).tz('Asia/Kolkata').format('HH:mm:ss'),
            sunset:timeConvert.unix(jsonData.sys.sunset).tz('Asia/Kolkata').format('HH:mm:ss')
        },
        coordinates:jsonData.coord,
        weather:[{
            main:jsonData.weather[0].main,
            description:jsonData.weather[0].description
        }],
        temperature:jsonData.main,
        wind:jsonData.wind,
        visibility:jsonData.visibility,
        ...(imageData?.imageUrl && { imageUrl: imageData.imageUrl })
    }).save();
   return  res.status(200).json({status:"Success",message:"Successfully fetched the weather data.",data})
}

//---------------------------------ADD IMAGE FOR WEATHER ICON----------------------------------------------------
async function addImage (req,res){
    let body = req.body
    await imageCollection.create(body)
    return res.status(200).json({message:"image added successfully"})
}

//---------------------------------ADD IMAGE FOR WEATHER ICON----------------------------------------------------
async function fetchWeatherHistory(req,res){

    let page = req.query.page || 1;
    let query={}
    if(req.query.location){
        query.name = new RegExp(req.query.location, 'i');
    }
    let data = await weatherCollection.find(query).skip((page-1)*9).limit(9)
    return res.status(200).json({status:"Sucesss",message:'Successfully fetched Weather History.',data})

}






module.exports = {
    fetchApi,
    addImage,
    fetchWeatherHistory,
}

const mongoose = require("mongoose");
const { type } = require("os");

const weatherSchema = new mongoose.Schema({
    name:{type:String},
    country:{type:String},
    sunTimeDetails:{
        sunrise:String,
        sunset:String,
    },
    coordinates:{
        long:Number,
        lat:Number,
    },
    weather:[{
        main:String,
        description:String,
    }],

    temperature:{
        temp:Number,
        feels_like:Number,
        temp_min:Number,
        temp_max:Number,
        pressure:Number,
        humidity:Number,
        sea_level:Number,
        grnd_level:Number,
    },
    wind:{
        speed:Number,
        deg:Number,
        gust:Number
    },
    visibility:{type:Number},
    imageUrl:{type:String,default:null}

},{
    timestamps:true
})


const weatherCollection = mongoose.model('weatherData',weatherSchema)

module.exports = weatherCollection
const express = require("express");
const tryCatch = require("../Middlewares/tryCatch")
const router = express.Router();
const {fetchApi,addImage,fetchWeatherHistory} = require("../Controllers/weather")


router.route("/details").post(tryCatch(fetchApi))
router.route("/image").post(tryCatch(addImage))
router.route("/history").get(tryCatch(fetchWeatherHistory))

module.exports = router
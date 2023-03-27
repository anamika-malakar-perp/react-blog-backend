const mongoose = require("mongoose");

const bollywoodSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    releaseDate: String
});

const Bollywood = mongoose.model("bollywood", bollywoodSchema)

module.exports = {Bollywood};
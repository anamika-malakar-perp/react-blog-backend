const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const bollywood = require('./Routes/Bollywood');
const fitness = require('./Routes/Fitness');
const food = require('./Routes/Food');
const hollywood = require('./Routes/Hollywood');
const technology = require('./Routes/Technology');
const userinfo = require('./Routes/UserInfo');
app.use(bodyParser.json());

app.use(cors());
app.use("/", bollywood);
app.use("/", fitness);
app.use("/", food);
app.use("/", hollywood);
app.use("/", technology);
app.use("/", userinfo)

app.listen(8000, () => {
    console.log('Server is running')
})
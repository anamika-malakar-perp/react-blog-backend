const express = require('express');
const app = express();
const cors = require('cors');
const bollywood = require('./routes/Bollywood');
const fitness = require('./routes/Fitness');
const food = require('./routes/Food');
const hollywood = require('./Routes/Hollywood');
const technology = require('./Routes/Technology');
const userinfo = require('./Routes/UserInfo');

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
const express = require('express')
const app = express()
const cors = require("cors");

const restaurants = require('./routes/Restaurants')
const review = require('./routes/Reviews')

const restaurantRoute = '/api/v1/restaurants'
const reviewRoute = '/api/v1/reviews'

require('dotenv').config()

const port = process.env.PORT || 3005

//Midllewares
app.use(cors());
app.use(express.json());

//Routes
app.use(restaurantRoute, restaurants)
app.use(reviewRoute, review)

app.listen(port, () => {
    console.log(`Server Listening on PORT: ${port}`);
})
const express = require('express')
const app = express()

const restaurants = require('./routes/Restaurants')
const review = require('./routes/Reviews')

require('dotenv').config()

const port = process.env.PORT || 3005

//Midllewares
//app.use(express.json());

//Routes
app.use('/api/v1/restaurants', restaurants)
app.use('/api/v1/reviews', review)

app.listen(port, () => {
    console.log(`Server Listening on PORT: ${port}`);
})
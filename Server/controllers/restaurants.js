const pool = require('../db')

const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await pool.query("SELECT restaurants.*, TRUNC(AVG(reviews.rating), 2) AS avg_rating FROM restaurants JOIN reviews ON restaurants.id = reviews.restaurant_id GROUP BY restaurants.id");
        res.status(200).json(restaurants.rows)
    } catch (error) {
        console.log(error)
    }
}

const getARestaurants = async (req, res) => {
    try {
        const {id} = req.params
        const restaurant = await pool.query("SELECT restaurants.name, TRUNC(AVG(reviews.rating), 2) AS avg_rating FROM restaurants JOIN reviews ON restaurants.id = reviews.restaurant_id WHERE restaurants.id = $1 GROUP BY restaurants.name",
            [id]
        )
        res.status(200).json(restaurant.rows[0])
    } catch (error) {
        console.log(error)
    }
}

const createRestauant = async (req, res) => {
    try {
        const {name, location, price_range} = req.body
        const newResturant = await pool.query("INSERT INTO restaurants (name, location, price_range) VALUES($1, $2, $3) RETURNING *",
            [name, location, price_range]
        )
        res.status(200).json(newResturant.rows[0])
    } catch (error) {
        console.log(error)
    }
}

const updateRestaurant = async (req, res) => {
    try {
        const {id} = req.params
        const {name, location, price_range} = req.body
        const updateRes = await pool.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
            [name, location, price_range, id]
        )
        res.status(200).json(updateRes.rows[0])
    } catch (error) {
        console.log(error)
    }
}

const deleteRestaurant = async (req, res) => {
    try {
        const {id} = req.params
        const deleteRestaurant = await pool.query("DELETE FROM restaurants WHERE id = $1 RETURNING id",
            [id]
        )
        res.status(200).json(deleteRestaurant.rows[0])
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllRestaurants,
    getARestaurants,
    createRestauant,
    updateRestaurant,
    deleteRestaurant
}
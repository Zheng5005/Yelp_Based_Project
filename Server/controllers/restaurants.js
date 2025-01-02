const pool = require('../db')
const {getAllReviews} = require('../controllers/reviews')

const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await pool.query("SELECT * FROM restaurants");
        res.status(200).json(restaurants.rows)
    } catch (error) {
        console.log(error)
    }
}

// This will return all reviews that a resturants has
const getRestaurant = async (req, res) => {
    try {
        const {id} = req.params
        const restaurant = await pool.query("SELECT * FROM restaurants WHERE id = $1",
            [id]
        );
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
        res.status(200).json(newResturant[0])
    } catch (error) {
        console.log(error)
    }
}

const updateRestaurant = async (req, res) => {
    try {
        const {id} = req.params
        const {name, location, price_range} = req.body
        const updateRes = await pool.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4",
            [name, location, price_range, id]
        )
        res.status(200).send("Restaurant Updated")
    } catch (error) {
        console.log(error)
    }
}

const deleteRestaurant = async (req, res) => {
    try {
        const {id} = req.params
        const deleteRestaurant = await pool.query("DELETE FROM restaurants WHERE id = $1",
            [id]
        )
        res.status(200).send('Restaurant Deleted')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllRestaurants,
    getRestaurant,
    createRestauant,
    updateRestaurant,
    deleteRestaurant
}
const pool = require('../db')

const getAllReviews = async (req, res) => {
    try {
        const {id} = req.params
        const reviews = await pool.query("SELECT * FROM reviews WHERE restaurant_id = $1",
            [id]
        )
        res.status(200).json(reviews.rows)
    } catch (error) {
        console.log(error)
    }
}

const createReview = async (req, res) => {
    try {
        const {restaurant_id, name, review, rating} = req.body
        const newReview = await pool.query("INSERT INTO reviews (restaurant_id, name, review, rating) VALUES($1, $2, $3, $4) RETURNING *",
            [restaurant_id, name, review, rating]
        )
        res.status(200).json(newReview.rows[0])
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllReviews,
    createReview
}
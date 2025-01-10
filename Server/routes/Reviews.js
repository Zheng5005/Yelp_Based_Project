const express = require('express')
const router = express.Router()

const { getAllReviews,
        createReview } = require('../controllers/reviews')

router.route('/').post(createReview)
router.route('/:id').get(getAllReviews)

module.exports = router
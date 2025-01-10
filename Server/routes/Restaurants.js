const express = require('express')
const router = express.Router()

const { getAllRestaurants,
        createRestauant,
        updateRestaurant,
        deleteRestaurant } = require('../controllers/restaurants')

router.route('/').get(getAllRestaurants).post(createRestauant)
router.route('/:id').patch(updateRestaurant).delete(deleteRestaurant)
        
module.exports = router
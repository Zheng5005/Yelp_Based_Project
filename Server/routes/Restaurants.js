const express = require('express')
const router = express.Router()

const { getAllRestaurants,
        getRestaurant,
        createRestauant,
        updateRestaurant,
        deleteRestaurant } = require('../controllers/restaurants')

router.route('/').get(getAllRestaurants).post(createRestauant)
router.route('/:id').get(getRestaurant).patch(updateRestaurant).delete(deleteRestaurant)
        
module.exports = router
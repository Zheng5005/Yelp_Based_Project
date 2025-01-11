const express = require('express')
const router = express.Router()

const { getAllRestaurants,
        createRestauant,
        updateRestaurant,
        deleteRestaurant, 
        getARestaurants} = require('../controllers/restaurants')

router.route('/').get(getAllRestaurants).post(createRestauant)
router.route('/:id').get(getARestaurants).patch(updateRestaurant).delete(deleteRestaurant)
        
module.exports = router
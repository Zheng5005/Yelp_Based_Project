const getAllRestaurants = async (req, res) => {
    try {
        res.status(200).send('All restaurants')
    } catch (error) {
        console.log(error)
    }
}

const getRestaurant = async (req, res) => {
    try {
        res.status(200).send('A restaurant')
    } catch (error) {
        console.log(error)
    }
}

const createRestauant = async (req, res) => {
    try {
        res.status(200).send('Restaurant created')
    } catch (error) {
        console.log(error)
    }
}

const updateRestaurant = async (req, res) => {
    try {
        res.status(200).send('Restaurant Updated')
    } catch (error) {
        console.log(error)
    }
}

const deleteRestaurant = async (req, res) => {
    try {
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
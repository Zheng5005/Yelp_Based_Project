const getAllReviews = async (req, res) => {
    try {
        res.status(200).send('All Reviews')
    } catch (error) {
        console.log(error)
    }
}

const createReview = async (req, res) => {
    try {
        res.status(200).send('Review created')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllReviews,
    createReview
}
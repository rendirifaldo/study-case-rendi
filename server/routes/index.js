const route = require('express').Router()

route.get('/', (req,res) => {
    res.json({
        message: "home page"
    })
})

const userRoutes = require('./user')
// const postingRoutes = require('./posting')

route.use('/users', userRoutes)
// route.use('/postings', postingRoutes)

module.exports = route
const postingRoute = require('express').Router()
const postingController = require('../controllers/PostingController')

postingRoute.get('/', PostingController.getPostings)
postingRoute.get('/information/:id', PostingController.findById)
postingRoute.post('/create',PostingController.create)
postingRoute.delete('/delete/:id',PostingController.delete)
postingRoute.put('/update/:id', PostingController.update)


module.exports = postingRoute
const Router = require('express')
const { addWork, getWorkByUserId, updateSuccess } = require('../controllers/workController')

const WorkRouter = Router()
WorkRouter.post('/add-work',addWork)
WorkRouter.get('/get-work-by-id',getWorkByUserId)
WorkRouter.put('/update-success/:id_work',updateSuccess)

module.exports=WorkRouter
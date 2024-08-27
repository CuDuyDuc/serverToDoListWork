const Router = require('express')
const { addWork, getWorkByUserId, updateSuccess, deleteWork, updateWork } = require('../controllers/workController')

const WorkRouter = Router()
WorkRouter.post('/add-work',addWork)
WorkRouter.get('/get-work-by-id',getWorkByUserId)
WorkRouter.put('/update-success/:id_work',updateSuccess)
WorkRouter.put('/update-work/:id_work', updateWork)
WorkRouter.delete('/delete-work/:id_work', deleteWork)

module.exports=WorkRouter
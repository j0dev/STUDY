const router = require('express').Router()
const controller = require('./controller')

router.get('/list', controller.list)
router.post('/assign-admin/:userid', controller.assignAdmin)

module.exports = router
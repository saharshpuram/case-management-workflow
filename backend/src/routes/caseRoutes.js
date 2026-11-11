const router = require('express').Router();
const controller = require('../controllers/caseController');
router.get('/', controller.listCases);
router.get('/:id', controller.getCaseById);
router.patch('/:id/status', controller.updateCaseStatus);
module.exports = router;

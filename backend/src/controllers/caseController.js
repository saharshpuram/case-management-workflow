const caseService = require('../services/caseService');
const listCases = async (req, res, next) => {
  try { res.json(await caseService.listCases()); } catch (error) { next(error); }
};
const getCaseById = async (req, res, next) => {
  try {
    const data = await caseService.getCaseById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Case not found' });
    res.json(data);
  } catch (error) { next(error); }
};
const updateCaseStatus = async (req, res, next) => {
  try {
    const data = await caseService.updateCaseStatus(req.params.id, req.body.status);
    res.json(data);
  } catch (error) { next(error); }
};
module.exports = { listCases, getCaseById, updateCaseStatus };

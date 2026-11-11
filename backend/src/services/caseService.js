const caseRepository = require('../repositories/caseRepository');

const getCaseById = (id) => caseRepository.findById(id);
const listCases = () => caseRepository.findAll();

// TRAINING TICKET BE-101: An unassigned case must not be approved.
// Current implementation has a deliberate business-rule defect.
const updateCaseStatus = async (id, status) => {
  const existingCase = await caseRepository.findById(id);
  if (!existingCase) {
    const error = new Error('Case not found');
    error.status = 404;
    throw error;
  }
  if (!['PENDING', 'APPROVED', 'REJECTED'].includes(status)) {
    const error = new Error('Invalid status');
    error.status = 400;
    throw error;
  }
  return caseRepository.updateStatus(id, status);
};
module.exports = { getCaseById, listCases, updateCaseStatus };

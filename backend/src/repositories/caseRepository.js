const pool = require('../config/database');

const findById = async (id) => {
  const result = await pool.query(
    `SELECT c.id, c.case_number, c.status, c.assigned_employee_id,
            e.name AS "assignedEmployeeName"
       FROM cases c LEFT JOIN employees e ON c.assigned_employee_id = e.id
      WHERE c.id = $1`, [id]
  );
  return result.rows[0];
};

const findAll = async () => {
  const result = await pool.query(
    `SELECT c.id, c.case_number, c.status, c.assigned_employee_id,
            e.name AS "assignedEmployeeName"
       FROM cases c LEFT JOIN employees e ON c.assigned_employee_id = e.id
      ORDER BY c.id`
  );
  return result.rows;
};

const updateStatus = async (id, status) => {
  const result = await pool.query(
    'UPDATE cases SET status = $1 WHERE id = $2 RETURNING id, case_number, status, assigned_employee_id',
    [status, id]
  );
  return result.rows[0];
};
module.exports = { findById, findAll, updateStatus };

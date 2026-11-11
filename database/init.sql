CREATE TABLE IF NOT EXISTS employees (
 id SERIAL PRIMARY KEY,
 name VARCHAR(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS cases (
 id INTEGER PRIMARY KEY,
 case_number VARCHAR(30) UNIQUE NOT NULL,
 status VARCHAR(20) NOT NULL DEFAULT 'PENDING',
 assigned_employee_id INTEGER REFERENCES employees(id)
);
INSERT INTO employees (id,name) VALUES (12,'John Smith'),(15,'Sarah Wilson') ON CONFLICT DO NOTHING;
INSERT INTO cases (id,case_number,status,assigned_employee_id) VALUES
 (105,'WC-2026-105','PENDING',12),
 (106,'WC-2026-106','PENDING',NULL),
 (107,'WC-2026-107','PENDING',15)
ON CONFLICT DO NOTHING;
SELECT setval(pg_get_serial_sequence('employees','id'),(SELECT MAX(id) FROM employees));

USE employee_db;

INSERT INTO department(name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Sales Person', 700000, 1),
('Lead Engineer', 160000, 2),
('Software Engineer', 130000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('James', 'Harvey', 1, NULL),
('Mike', 'Tyson', 2, NULL),
('John', 'Smith', 3, NULL),
('Katie', 'Garvy', 4, 1),
('Jen', 'Stellar', 6, 2),
('John', 'Mack', 5, 3),
('David', 'Lesly', 3, 4),
('Max', 'Pane', 4, 3);
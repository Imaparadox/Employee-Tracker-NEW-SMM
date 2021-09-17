const connection = require('./connection');

class DataBase {
    constructor(connection) {
        this.connection = connection;
    };

    locateAllDepartments() {
        return this.connection.promise().query(
            `SELECT department.id, department.name FROM department;`
        );
    };

    locateAllRoles() {
        return this.connection.promise().query(
            "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    };

    locateAllEmployees() {
        return this.connection.promise().query(
            `SELECT * FROM employee_db.employee;`
        );
    };

    createDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }

};

module.exports = new DataBase(connection);

//Displays the main prompts
// function mainPromptMenu() {
//     let queries = [
//         'View all Departments',
//         'View all Roles',
//         'View all Employees',
//         'Add a Department',
//         'Add a Role',
//         'Add a Employee',
//         'Update Employee Role',
//         'Quit'
//     ];
//     prompt([
//         {
//             type: 'rawlist',
//             name: 'choice',
//             message: 'Main Menu:',
//             choices: queries
//         }
//     ])
//         .then((answer) => {
//             switch (answer.choice) {
//                 case 'View all Departments':
//                     viewAllDepartments();
//                     break;
//                 case 'View all Roles':
//                     viewAllRoles();
//                     break;
//                 case 'View all Employees':
//                     viewAllEmployees();
//                     break;
//                 case 'Add a Department':
//                     addDepartment();
//                     break;
//                 case 'Add a Role':
//                     addRole();
//                     break;
//                 case 'Add a Employee':
//                     addEmployees();
//                     break;
//                 case 'Update Employee Role':
//                     updateEmployeeRole();
//                     break;
//                 case "Quit":
//                     break;
//                 default:
//                     break;
//             }
//         })
// };
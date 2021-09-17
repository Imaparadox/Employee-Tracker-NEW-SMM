// const mysql = require('mysql');
// const connection = require('./db/connection');
const { prompt } = require('inquirer');
const logo = require('asciiart-logo');
const db = require('./db');
require('console.table');

menuInit();

//Displays the logo
function menuInit() {
    const consoleLogo = logo({ name: 'Employee Tracker' }).render();

    console.log(consoleLogo);
    mainPromptMenu();
};

function mainPromptMenu() {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Please choose one of the following:',
            choices: [
                {
                    name: 'View all Employees',
                    value: 'VIEW_EMPLOYEES'
                },
                {
                    name: "Add an Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add a Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add a Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let answer = res.choice;
        // Call the appropriate function depending on what the user chose
        switch (answer) {
            case 'VIEW_DEPARTMENTS':
                viewAllDepartments();
                break;
            case 'VIEW_ROLES':
                viewAllRoles();
                break;
            case 'VIEW_EMPLOYEES':
                viewAllEmployees();
                break;
            case 'Add a Department':
                addDepartment();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'Add a Employee':
                addEmployees();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            default:
                quit();
        }
    }
    )
}

function viewAllDepartments() {
    db.locateAllDepartments()
        .then(([rows]) => {
            let departRows = rows;
            console.log("\n");
            console.table(departRows);
        })
        .then(() => {
            mainPromptMenu()
        });
};


function viewAllRoles() {
    db.locateAllRoles()
        .then(([rows]) => {
            let roleRows = rows;
            console.log("\n");
            console.table(roleRows)
        })
        .then(() => {
            mainPromptMenu()
        });
};

async function viewAllEmployees() {
    const employees = await db.locateAllEmployees();
    console.table(employees);
};

function addDepartment() {
    //use prompt to make it run inquirer
    //THEN re run the function that asks the initial inquirer prompts 
    //BUILD sql language in function
    prompt({
        type: 'input',
        message: `Please enter a department name.`,
        name: 'department'
    })
        .then((answers) => {
            const sql = `INSERT INTO department (name)
        VALUES (?)`
            const result =
                db.query(sql, params => {
                    body.aDepartment()
                })

        });

};

function addRole() {
    prompt([{
        type: 'input',
        message: `Please enter a name for your role.`,
        name: 'title'
    },
    {
        type: 'input',
        message: `Please enter a salary amount.`,
        name: 'salary'
    },
    {
        type: 'list',
        message: `Please select the department this role belongs to.`,
        name: 'department',
        choices: []
    }])
};

function addEmployees() {
    prompt([{
        type: 'input',
        message: `Please enter employee's first name.`,
        name: 'first_name'
    },
    {
        type: 'input',
        message: `Please enter employee's last name.`,
        name: 'last_name',
    },
    {
        type: 'list',
        message: `Please select your employee's company role.`,
        name: 'role',
        choices: []
    },
    {
        type: 'list',
        message: `Please select your employee's manager.`,
        name: 'manager',
        choices: []
    }]);
};

function updateEmployeeRole() {
    prompt([{
        type: 'list',
        message: `Please select an employee to edit.`,
        choices: []
    },
    {
        type: 'list',
        message: `Please choose a new role for your employee.`,
        choices: []
    }]);
};

// function confirmInput() {
//     return {
//         type: "confirm",
//         message: "",
//         name: "confirm"
//     };
// };

function quit() {
    console.log("Goodbye!");
    process.exit();
}









// get the prompts to show up in terminal and then be able to console log the answers that i choose
//IF the answers are showing up make sure I can send them to the database.
//IF they show up in the database make sure you can get a response from the database back. 
//(ie get the same data back in the form of a console log or something.) 



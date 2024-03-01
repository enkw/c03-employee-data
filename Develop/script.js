// Collect employee data
// TODO: Get user input to create and return an array of employee objects
// My instructor Dan wrote this comment:  MUST RETURN ARRAY OF EMPLOYEE DATA

const employeesArray = [];
const collectEmployees = function() {
  let addEmployee = true;
  while (addEmployee) {
    const employeeData = {
      firstName: prompt(`Please enter employee's first name`),
      lastName: prompt(`Please enter employee's last name`),
      salary: parseFloat(prompt(`Please enter employee's salary`))
    };
    // For if the user enters a negative number or letters, prompts them to re-enter the amount
    while (isNaN(employeeData.salary) || employeeData.salary <= 0) {
      alert(`Please enter a valid number`);
      employeeData.salary = parseFloat(prompt(`Please enter employee's salary`));
    }
    // This adds the collected data to the array
    employeesArray.push(employeeData);
    // This portion is for allowing data to be entered for multiple employees
    const addMore = confirm("Would you like to add another?");
    if (!addMore) {
      addEmployee = false;
    }
  }
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // My instructor Dan wrote this comment:  use a for loop to go through all the objects
  // My instructor Dan wrote this comment:  get salaries from objects
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // My instructor Dan wrote this comment: don't forget: Math.floor(Math.random()*# of employees)
}

collectEmployees();
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

const mysql = require("mysql2");

const db_pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "employee_review_test",
  password: "12345678",
});

let createEmployeesTable = `
    CREATE TABLE IF NOT EXISTS employees( 
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    is_admin BOOLEAN NOT NULL,
    hire_date DATE NOT NULL,

    UNIQUE(id,email)
    );
    `;

let createPerformanceReviewTable = `
    CREATE TABLE IF NOT EXISTS performance_review(
    id INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
    employee_id INT NOT NULL,
    reviewer_id INT NOT NULL,
    adaptability TINYINT,
    communication TINYINT,
    punctuality TINYINT,
    quality_of_work TINYINT,
    comments TEXT,
    feedback TEXT,

    PRIMARY KEY (employee_id,reviewer_id),
    unique(id)
   );
    `;

createTable(createEmployeesTable, "employees");

function createTable(table, tableName) {
  db_pool.execute(table, function (err, res) {
    if (res) {
      console.log(`Created Table: ${tableName} \n`);
      if (tableName == "employees") {
        createFirstEmployeeEntries();
        createTable(createPerformanceReviewTable, "performance_review");
      }
      if (tableName === "performance_review") {
        createFirstReviewEntry();
      }
    }
    if (err) {
      console.log(`Failed to create ${tableName} \n`, err.message);
    }
  });
}

function createFirstEmployeeEntries() {
  employees = [
    ["Dan", "Admin", "passwordA", "dan@email.com", true, "2020-05-24"],
    ["Sam", "Admin", "passwordA", "sam@email.com", true, "2020-05-26"],
    ["John", "Employee", "passwordE", "john@email.com", false, "2020-06-30"],
    ["Ann", "Employee", "passwordE", "ann@email.com", false, "2020-07-12"],
  ];

  let createEmployee =
    "INSERT INTO employees ( firstName, lastName, password, email, is_admin, hire_date ) VALUES(?,?,?,?,?,?)";
  employees.map((employee) => {
    db_pool.execute(createEmployee, employee, function (err, res) {
      if (res) {
        console.log(
          `Created ${employee[4] ? "Admin " : "Employee"} ${employee[0]} \n`
        );
      }
      if (err) {
        console.log(
          `Failed to create ${employee[4] ? "Admin " : "Employee"} ${
            employee[0]
          } \n`,
          err.message,
          "\n"
        );
      }
    });
  });
}

function createFirstReviewEntry() {
  console.log("getting ids");

  db_pool.execute("SELECT id FROM employees", function (err, res) {
    if (err) {
      console.log(`Failed to get employee ids`, err.message);
    }
    if (res) {
      reviews = [
        [res[1].id, res[0].id, 5, 4, 3, 4, "Improving quickly"],
        [res[2].id, res[0].id, 2, 5, 3, 4, "Improving fast"],
        [res[0].id, res[2].id, 3, 5, 3, 4, "Improving quite well"],
        [res[3].id, res[2].id, 1, 4, 3, 4, "Improving "],
      ];
      let createFirstReviews =
        "INSERT INTO performance_review ( employee_id, reviewer_id, adaptability, communication, punctuality, quality_of_work, comments ) VALUES(?,?,?,?,?,?,?)";
      reviews.map((review) =>
        db_pool.execute(createFirstReviews, review, function (err, res) {
          if (err) {
            console.log(
              `Failed to create review for ${review[0]}\n`,
              err.message,
              "\n"
            );
          }
          if (res) {
            console.log(`Created review for ${review[0]}\n`);
          }
        })
      );
    }
  });
}

module.exports = db_pool.promise();

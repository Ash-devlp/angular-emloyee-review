const db = require("../util/db");

module.exports = class Employee {
  constructor(firstName, lastName, email, password, isAdmin, hireDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.isAdmin = Boolean(isAdmin);
    this.hireDate = hireDate;
  }

  addEmployee() {
    console.log(`creating entry ${this.email}`);
    return db.execute(
      "INSERT INTO employees ( firstName, lastName, password, email, is_admin, hire_date ) VALUES(?,?,?,?,?,?)",
      [
        this.firstName,
        this.lastName,
        this.password,
        this.email,
        this.isAdmin,
        this.hireDate,
      ]
    );
  }

  updateEmployee(id) {
    console.log("updating employee data", id);
    return db.execute(
      "UPDATE employees firstname=?, lastname=?, login_key=?, hire_date=?, email=? WHERE id=? ",
      [
        this.firstName,
        this.lastName,
        this.loginKey,
        this.hireDate,
        this.email,
        id,
      ]
    );
  }

  static removeById(id) {
    console.log("Removing employee", id);
    return db.execute("DELETE FROM employees WHERE id=?", [id]);
  }
  static viewAll() {
    console.log("fetching all employees");
    return db.execute(
      "SELECT id,firstname,lastname,email,hire_date FROM employees"
    );
  }

  static findById(id) {
    console.log("fetching user by id", email);
    return db.execute("SELECT * FROM users WHERE id = ?;", [id]);
  }
};

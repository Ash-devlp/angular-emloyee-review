const db = require("../util/db");

module.exports = class Review {
  constructor(
    review_by,
    review_of,
    communication,
    adaptibility,
    punctuality,
    quality_of_work,
    comment
  ) {
    this.review_by = review_by;
    this.review_of = review_of;
    this.communication = communication;
    this.adaptibility = adaptibility;
    this.punctuality = punctuality;
    this.quality_of_work = quality_of_work;
    this.comment = comment;
  }
  addReview() {
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
  static getUserReviews(id) {
    console.log("fetching all user reviews");
    return db.execute("SELECT * FROM performance_review WHERE employee_id=?", [
      id,
    ]);
  }
};

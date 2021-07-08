const express = require("express");
const cors = require("cors");
const { Client } = require("pg");
const connectionString = "postgres://postgres:root@localhost:5432/HR";
const client = new Client({
  connectionString: connectionString,
});
client.connect();

var app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.set("port", process.env.PORT || 9000);

app.post("/login", function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username + " // "+ password);

  client.query(
    'select * from users where user_name = \''+username+'\' and password = \''+password+'\'',
    (err, result) => {
      if (err) {
        console.log("1");
        console.log(err);
        res.status(400).send(err);
        return;
      }

      if (result) {
        console.log("login");
        res.status(200).send(result.rows);
      } else {
        res.send({ message: "Invalid User" });
      }
    }
  );
});

app.get("/", function (req, res, next) {
  var sql =
    "SELECT employee_id, first_name, last_name, email, phone_number, jobs.job_title , salary, manager_id,departments.department_name " +
    "FROM employees " +
    "LEFT JOIN " +
    "departments " +
    "ON " +
    "employees.department_id = departments.department_id " +
    "LEFT JOIN " +
    "jobs " +
    "ON " +
    "employees.job_id = jobs.job_id;";

  client.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }

    if (result) {
      res.status(200).send(result.rows);
    }
  });
});

app.listen(9000, function () {
  console.log("Server is running.. on Port 9000");
});

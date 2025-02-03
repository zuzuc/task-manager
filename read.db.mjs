import sqlite3 from "sqlite3";
const db = new sqlite3.Database("database.db");

console.log("Take 5 rows with all columns from tasks");
console.log("=======================================");
db.serialize(() => {
  db.each(`SELECT * from tasks`, (err, row) => {
    console.log(row.id + " status: " + row.status);
  });
});

db.close();

console.log("========================================");
console.log("Only the rows where the priority is high");
console.log("========================================");
db.serialize(() => {
  //   db.each(`SELECT * from tasks`, (err, row) => {
  //     console.log(row.id + " status: " + row.status);
  //   });
});

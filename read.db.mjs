import sqlite3 from "sqlite3";
const db = new sqlite3.Database("database.db");

function readRow(error, row) {
  if (error) {
    console.error(error.message);
    return;
  }
  console.table(row);
}

console.log("=======================================");
console.log("Take 5 rows with all columns from tasks");
console.log("=======================================");
db.serialize(() => {
  db.each(`SELECT * from tasks ORDER BY RANDOM() LIMIT 5`, [], (err, row) => {
    console.log(
      row.id +
        " status: " +
        row.status +
        " priority: " +
        row.priority +
        " created_at:" +
        row.created_at
    );
  });
});

console.log("=========================================");
console.log("Only show rows where the priority is high");
console.log("=========================================");
db.serialize(() => {
  db.each(`SELECT * FROM tasks WHERE priority = 'high'`, [], readRow);
});

console.log("==========================================================");
console.log("Only show rows where task is created after a specific date");
console.log("==========================================================");
db.serialize(() => {
  db.each(
    `SELECT * FROM tasks WHERE created_at > ? ORDER BY created_at ASC`,
    ["2025-01-01"],
    readRow
  );
});

console.log(
  "======================================================================"
);
console.log(
  "Only show rows where id is higher than 3 and task name is not cleaning"
);
console.log(
  "======================================================================"
);
db.serialize(() => {
  db.each(
    `SELECT * FROM tasks WHERE id > ? AND name != ? ORDER BY id ASC`,
    [3, "cleaning"],
    readRow
  );
});

console.log(
  "============================================================================="
);
console.log(
  "Only show 5 rows: take the 5 latest created tasks and sort by DESC created_at"
);
console.log(
  "============================================================================="
);
db.serialize(() => {
  db.each(
    `SELECT * FROM tasks ORDER BY created_at DESC LIMIT 5`,
    [], readRow
  );
});

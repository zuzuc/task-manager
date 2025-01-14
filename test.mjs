import sqlite3 from "sqlite3";
const db = new sqlite3.Database("database.db");

db.serialize(() => {
    // db.run('CREATE TABLE tasks (info TEXT)')
    // db.run('CREATE TABLE tasks (task TEXT)')
    // db.run('CREATE TABLE tasks (priority TEXT)')
    // db.run('INSERT INTO tasks VALUES ("1", "cleaning", "medium")')

    // const result = db.run('SELECT info FROM tasks')
    // console.log(result);
})


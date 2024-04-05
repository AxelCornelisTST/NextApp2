import mysql from 'mysql2'

export const dataBasePoolConnection = mysql.createPool({
    database: "inventory",
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306
});


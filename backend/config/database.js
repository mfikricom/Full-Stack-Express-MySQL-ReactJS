import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
const dbConnection = require("./../../db");

async function getUsers(req, res) {
    try {
        const findAllUsersPassword = "select * from user_credentials";
        const allUsers = await dbConnection.query(findAllUsersPassword);
        res.json(allUsers);
    } catch (e) {
        throw new Error(e.message);
    }
}

module.exports.getUsers = getUsers;
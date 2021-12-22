const dbConnection = require("./../../db");

async function getAdminUsers(req, res) {
    try {
        const findAllAdminUsersQuery = "select * from admin_users";
        const allUsers = await dbConnection.query(findAllAdminUsersQuery);
        res.json(allUsers);
    } catch (e) {
        throw new Error(e.message);
    }
}

module.exports.getAdminUsers = getAdminUsers;
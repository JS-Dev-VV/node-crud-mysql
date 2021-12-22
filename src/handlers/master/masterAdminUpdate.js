const dbConnection = require("./../../db");
const utils = require('./../../utils')

async function masterAdminUpdate(req, res) {
    try {
        const findAllAdminUsersQuery = "select * from admin_users";
        const allUsers = await dbConnection.query(findAllAdminUsersQuery);

        if (allUsers && allUsers.length) {
            allUsers.map(async (item) => {
                let encryptedPassword = utils.encrypt(item.password)
                const updateQuery = `UPDATE admin_users SET password = "${encryptedPassword}" where email = "${item.email}"`;
                await dbConnection.query(updateQuery)
            })
            res.sendStatus(200)
        }
    } catch (e) {
        throw new Error(e.message);
    }
}

module.exports.masterAdminUpdate = masterAdminUpdate;
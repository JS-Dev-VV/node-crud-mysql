const dbConnection = require("./../../db");
const utils = require('./../../utils')

async function masterUserUpdate(req, res) {
    try {
        const findAllUsersPassword = "select email, password from user_credentials";
        const allUsers = await dbConnection.query(findAllUsersPassword);

        if (allUsers && allUsers.length) {
            allUsers.map(async (item) => {
                let encryptedPassword = utils.encrypt(item.password)
                const updateQuery = `UPDATE user_credentials SET password = "${encryptedPassword}" where email = "${item.email}"`;
                await dbConnection.query(updateQuery)
            })
            res.sendStatus(200)
        }
    } catch (e) {
        throw new Error(e.message);
    }
}

module.exports.masterUserUpdate = masterUserUpdate;
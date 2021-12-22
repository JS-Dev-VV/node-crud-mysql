const { Router } = require("express");
const masterRouter = Router();
const { masterUserUpdate } = require('./masterUserUpdate')
const { masterAdminUpdate } = require('./masterAdminUpdate')
const { getUsers } = require('./getUsers')
const { getAdminUsers } = require('./getAdminUsers')

masterRouter.get("/users", getUsers)
masterRouter.get("/admins", getAdminUsers)
masterRouter.put("/usersUpdate", masterUserUpdate)
masterRouter.put("/adminsUpdate", masterAdminUpdate)

module.exports.masterRouter = masterRouter;

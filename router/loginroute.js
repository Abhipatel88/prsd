import express from 'express'
import { loginuser } from '../controller/user.js'
import { com } from '../controller/company.js'
import { tra } from '../controller/transaction.js'
// import { login } from '../controller/user.js'
// loginuser
const router = express.Router()
router.route('/loginuser').post(loginuser)
router.route('/company').post(com)
router.route("/transaction").post(tra)

export default router
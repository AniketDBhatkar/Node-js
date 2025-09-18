
import express from "express"

import {GetAnotherRoute, GetHome,data} from "../controllers/controller.js"

let router= express.Router()

router.get("/",GetHome)

router.get("/another-router",GetAnotherRoute)

export default router

import express from "express"

import { getAboutdata,getHomedata,postSubmitForm } from "../controllers/controller.js"

const router=express.Router()

router.get("/",getHomedata)
router.get("/about",getAboutdata)

router.post("/submit-from",postSubmitForm)

export default router
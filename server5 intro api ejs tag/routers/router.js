
import express from "express"

import { getAboutdata,getHomedata,postSubmitForm } from "../controllers/controller.js"

const router=express.Router()

router.get("/",getHomedata)
router.get("/about",getAboutdata)

router.post("/submit-form",postSubmitForm)

export default router
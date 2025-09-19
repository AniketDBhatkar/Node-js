import express from "express"
import { GetAbout,GetHome } from "../controllers/controler.js"

const router =express.Router()

router.get("/",GetHome)
router.get("/about",GetAbout)

export default router 
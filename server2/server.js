import express from "express"

// defalut import
import kuchBhi from "./script.js"
import xyz from "./script2.js"
import anything from "./script3.js"

// name import

import { data1, data2, doSomthing } from "./script3.js"
import { doSomthing2 } from "./script3.js"


// as import rename 

// import { printhello as greet ,printbye as farewell } from "./script4.js"

// import as an object

import * as message from "./script4.js"


let port = 3001

let app = express()

console.log("got some data", kuchBhi)
console.log(xyz)
console.log(data2)
doSomthing()
doSomthing2()
console.log(anything)

app.get("/", (req, res) => {
    res.send("got this message from backend !")
})

app.listen(port, () => {
    console.log(`server is runing on port ${port}`)
})


// as import rename output
// greet()

// farewell()

// as import object output

message.printhello();
message.printbye();
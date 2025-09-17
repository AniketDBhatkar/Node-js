import express from "express"

let app = express()

let port = 3000

app.get("/",(request,response)=>{
    response.send(" Aniket Bhatkar welcome to our node server !")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
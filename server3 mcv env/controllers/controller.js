let data =[
    {name:"Aniket",city:"nagpur"},
    {name:"rushi",city:"pune"},
    {name:"ronny",city:"mumbai"},
    {name:"manish",city:"nashik"},      
    {name:"mahesh",city:"aurangabad"}      
]

let GetHome=(request,respond)=>{

    // we can send single respond and can send message ,html file, json
    respond.status(200).send("hello Aniket !")
    // res.status(200).json({ message: "hello user", context: "this is a response object send to a json response with a status code of 200", data })
}
let GetAnotherRoute = (req, res) => {
    res.status(200).send("hello user again !")
}
export {GetHome ,GetAnotherRoute,data}
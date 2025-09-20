
let persons = [
    { name: "Aniket", phone: 123456 },
    { name: "Shivam", phone: 789101112 },
    { name: "Santosh", phone: 78676544 },
    { name: "Rushi", phone: 65774159 },
    { name: "Rohit", phone: 88570322 },
]

let getHomedata=(req,res)=>{
    res.status(200).render("index",{data: "hello 123", data2: true, data3: persons, kuch: "kuch bhi"});
}

let getAboutdata=(req,res)=>{
    res.status(200).render("about");
}

let postSubmitForm=(req,res)=>{
    // if we are recieving form data it is always inside of req.body
    console.log(req.body);

    res.status(301).redirect("/")

}

export{getAboutdata,getHomedata,postSubmitForm}
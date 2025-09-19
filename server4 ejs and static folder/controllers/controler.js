let GetHome=(req,res)=>{
    res.status(200).render("index")
}

let GetAbout=(req,res)=>{
    res.status(200).render("about")
}

export {GetAbout,GetHome}
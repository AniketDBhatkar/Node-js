let getHome = (req, res) => {
    try {
        // console.log(req.query.name)
        // console.log(req.query.phone)
        let { name, phone } = req.query

        // t f -> f || t -- t

        if (!name || !phone) throw ("requested data was not found please send name and phone number !")

        // query parameters
        console.log(name)
        console.log(phone)
        res.status(200).json({ message: `hello ${name} !` })
    } catch (err) {
        console.log("an error occured ", err)
        res.status(400).json({ message: err })
    }
}

let getSomewhere = (req, res) => {
    try {
        let { name } = req.params;

        if (!name || name.trim() === "") {
            return res.status(400).json({ error: "Name cannot be empty" });
        }

        res.status(200).json({ message: `this is somewhere for ${name}!` });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};


export { getHome, getSomewhere }


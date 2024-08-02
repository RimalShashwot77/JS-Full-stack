const category = require('../models/categoryModel')

const Addcategory = (req,res) => {
    const data = req.body
    const name = data.name
    const description = data.description

    const newCategory = new category(
        {
            name : name,
            description : description

        }
    );

    newCategory
    .save()
    .then((data) => {
        res
        .status(201)
        .json({ message : "Category added successfully", data});
    })

    .catch((err) => {
        res.status(500).json({ message: "Failed to add category", err });
        console.log("error : ", err)
    });
}

module.exports = {
    Addcategory

}
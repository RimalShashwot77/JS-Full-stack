const express = require('express');
const UserProfile = require("../models/userProfile")
const router = express.Router();

// controller to add a new user profile to the database

const userProfile = (req,res) =>{


    // const {name,email} = req.body;
    const data = req.body;
    const userName = data.name;
    const userEmail = data.email;

    // const name =req.body.name;
    
    const newUserProfile = new UserProfile(
        {
            name: userName,
            email: userEmail,
        }
    );
    // const newUserProfile = new userProfile({name,email});
    newUserProfile
    .save()
    .then((data) =>{
        res
        .status(200)
        .json({ message: "User profile added successfully", data});

})

.catch((err) => {
    res.status(500).json({ message: "Error adding user profile", err });
});

};
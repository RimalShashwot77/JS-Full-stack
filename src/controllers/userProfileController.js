// const express = require('express');
// const UserProfile = require("../models/userProfile")
// const router = express.Router();


// // controller to add a new user profile to the database

// const userProfile = (req,res) =>{


//     // const {name,email} = req.body;
//     const data = req.body;
//     const userName = data.name;
//     const userEmail = data.email;

//     // const name =req.body.name;

//     const newUserProfile = new UserProfile(
//         {
//             name: userName,
//             email: userEmail,
//         }
//     );
//     // const newUserProfile = new userProfile({name,email});
//     newUserProfile
//     .save()
//     .then((data) =>{
//         res
//         .status(200)
//         .json({ message: "User profile added successfully", data});

// })

// .catch((err) => {
//     res.status(500).json({ message: "Error adding user profile", err });
// });

// };

// module.exports = userProfile;



// // controller to create user profile
// const UserProfile = require("../models/userProfile");
// // controller to add a new user profile to the database
// const userProfile = (req, res) => {
// //   const {name,email}=req.body;
//   const data = req.body;
//   const userName = data.name;
//   const userEmail = data.email;
// // const name=req.body.name;
//   const newUserProfile = new UserProfile( 
//     {
//       name: userName,
//       email: userEmail,
//     }
//   );
//   newUserProfile
//     .save()
//     .then((data) => {
//       res
//         .status(201)
//         .json({ message: "User profile added successfully", data });
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Error occured", err });
//     });
// };


// module.exports = userProfile;

const domain = "http://localhost:5000";
const UserProfiles = require("../models/userProfile");
// Helper function to send error responses
const sendErrorResponse = (res, error) => {
  res.status(500).json({ msg: error.message });
};

// Update user profile as it is created during registration
const updateUserProfile = async (req, res) => {
  try {
    const { bio } = req.body;
    let updateData = { bio };

    if (req.file) {
      const profileImage = `${domain}/uploads/profiles/${req.file.filename}`;
      updateData.profileImage = profileImage;
    }

    const profile = await UserProfiles.findOneAndUpdate(
      { user: req.user.id },
      updateData,
      { new: true, runValidators: true }
    );

    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }

    res.status(200).json({ profile });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const profile = await UserProfiles.findOne({ user: req.user._id }).populate(
      "user",
      ["name", "email"]
    );
    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    res.status(200).json({ profile });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get all user profiles
const getAllUserProfiles = async (req, res) => {
  try {
    const profiles = await UserProfiles.find().populate("user", [
      "name",
      "email",
    ]);
    res.status(200).json({ profiles });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get user profile by ID
const getUserProfileById = async (req, res) => {
  try {
    const profile = await UserProfiles.findOne({
      user: req.params.id,
    }).populate("user", ["name", "email"]);
    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    res.status(200).json({ profile });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Delete user profile
const deleteUserProfile = async (req, res) => {
  try {
    const profile = await UserProfiles.findOneAndDelete({ user: req.user._id });
    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    res.status(200).json({ msg: "Profile deleted successfully" });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

//  exporting the controller functions
module.exports = {
  updateUserProfile,
  getUserProfile,
  getAllUserProfiles,
  getUserProfileById,
  deleteUserProfile,
};
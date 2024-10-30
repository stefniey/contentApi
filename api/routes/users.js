const express = require("express");
const router = express.Router();
const data = require("../db.json");

// Route handler for the root path ("/") to display all users
router.get("/", (req, res) => {
    res.status(200).json(data);
});

// Route to get a user by ID
router.get("/:id", (req, res) => {
    const itemId = parseInt(req.params.id, 10); // Get the ID and convert to a number

    if (isNaN(itemId)) {
        // Check if itemId is a valid number
        return res
            .status(400)
            .json({ success: false, message: "Invalid ID format" });
    }
    const user = data.find((item) => item.id === itemId); // Find the user with the matching ID

    if (user) {
        res.status(200).json({ success: true, user });
    } else {
        res.status(404).json({ success: false, message: "User not found" });
    }
});

// Route to get users by userName
router.get("/userName/:userName", (req, res) => {
    const { userName } = req.params; // Extract the userName parameter from the URL
    const userByUserName = data.filter(
        (user) => user.userName.toLowerCase() === userName.toLowerCase()
    );
    res.json(userByUserName);
});

// Route to get users by email
router.get("/email/:email", (req, res) => {
    const { email } = req.params; // Extract the email parameter from the URL
    const userByEmail = data.filter(
        (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    res.json(userByEmail);
});

// Route to get users by phone
router.get("/phone/:phone", (req, res) => {
    const { phone } = req.params; // Extract the phone parameter from the URL
    const userByPhone = data.filter(
        (user) => user.phone === phone // Assuming phone is stored as a string
    );
    res.json(userByPhone);
});

// Route to get users by status
router.get("/status/:status", (req, res) => {
    const { status } = req.params; // Extract the status parameter from the URL
    const usersByStatus = data.filter(
        (user) => user.Status.toLowerCase() === status.toLowerCase()
    );
    res.json(usersByStatus);
});

// Route to get users by organisation
router.get("/organisation/:organisation", (req, res) => {
    const { organisation } = req.params; // Extract the organisation parameter from the URL
    const usersByOrganisation = data.filter(
        (user) => user.organisation.toLowerCase() === organisation.toLowerCase()
    );
    res.json(usersByOrganisation);
});

// Route to get users by date joined
router.get("/dateJoined/:dateJoined", (req, res) => {
    const { dateJoined } = req.params; // Extract the dateJoined parameter from the URL
    const usersByDateJoined = data.filter(
        (user) => user.dateJoined === dateJoined // Assuming dateJoined is stored in a specific format
    );
    res.json(usersByDateJoined);
});

// Route to create a new user
router.post("/", (req, res) => {
    // In a real application, you would add the logic to save the new user to the database here
    res.status(201).json({
        message: "Handling POST request to /users",
    });
});

module.exports = router;

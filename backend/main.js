const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { User } = require('./db')
const cors = require('cors');



app.use(bodyParser.json());
app.use(cors());
app.post("/signup", async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    try {
        const existingUser = await User.findOne({
            username: username
        });

        if (existingUser) {
            return res.status(411).json({
                message: "User already exist signup with other user"
            });
        }

        const user = await User.create({
            username: username,
            password: password
        });

        res.status(200).json({
            msg: "User created successfully!!!",
            name: username,
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            message: "Internal server error"
        });
    }

})
app.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let validuser = await User.findOne({
        username: username,
        password: password,
    })
    if (validuser) {

        res.status(200).json({
            msg: "signed in sucessfully!!!",
            name: validuser.username,

        })
    }
    else {
        return res.status(403).json({
            msg: "Error while login",
        });
    }



})

const PORT = 3000;



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})


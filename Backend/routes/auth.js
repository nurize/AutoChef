const router = require("express").Router();
const Joi = require("joi");
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const JWTPRIVATEKEY = "Wisdom(2704)00110011"; // Use environment variable in production

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            console.log("Validation Error:", error.details[0].message);
            return res.status(400).send({ message: error.details[0].message });
        }

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            console.log("User not found with email:", req.body.email);
            return res.status(401).send({ message: "Invalid Username or Password" });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            console.log("Invalid password for email:", req.body.email);
            return res.status(401).send({ message: "Invalid Username or Password" });
        }

        const token = user.generateAuthToken();
        res.cookie('authToken: ', token, { httpOnly: true, secure: 'production', sameSite: 'strict' });
        return res.status(200).send({ message: "Login Successful" });
    } catch (error) {
        console.error("Internal Server Error:", error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
});

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    });
    return schema.validate(data);
};

module.exports = router;

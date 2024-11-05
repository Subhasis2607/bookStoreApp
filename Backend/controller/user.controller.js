import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"
export const signup = async(req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user =await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await bcryptjs.hash(password, 10); //to secue paasword we will use bcrypt in our password here we will pass the password
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
       createdUser.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const login = async(req, res) => {
    try {
        const { email, password } = req.body; // for login we need only email and password this can be get by body
        const user = await User.findOne({ email }); // find code for finding email from database and used  await as response ane mein time lagega so we will wait and login will be in hold till response not arrive of comparision
        const isMatch = await bcryptjs.compare(password, user.password);  // for matching and comparing password given at frontend with password present in database to check whether the credentials is present in database or not
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });  // if password not present or not match then we give invalid credentials
        } else {
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id, // and now we store all details in variables from database
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
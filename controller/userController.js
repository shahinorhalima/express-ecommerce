import userServices from "../services/userService.js";

const registeruserController = async (req, res) => {
  console.log(`api hit `);
  try {
    const { email, phone, password } = req.body;
    // logic for register user
    if (!email || !phone || !password) {
      return res.status(400).json({
        status: "fail",
        message: "creadition not match",
      });

      const user = await userServices.createUserService({
        email,
        phone,
        password,
      });
      res.status(201).json({
        status: "succes",
        data: user,
      });
    }
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

const userControllers = {
  registeruserController,
};

export default userControllers;

const usersCtrl = {};
const User = require("../models/User");
const jwt = require('jsonwebtoken');

usersCtrl.singup = async (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    res.json({
      success: false,
      status: "Passwords do not match",
    });
  }
  if (password.length < 4) {
    res.json({
      success: false,
      status: "Passwords must be at least 4 characters",
    });
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      res.json({
        success: false,
        status: "The Email is already in use.",
      });
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();

      res.json({
        success: true,
        status: "You are registered.",
      });
    }
  }
};

usersCtrl.signin = async (req, res) => {
  const { email, password } = req.body;

  await User.findOne({ email: email })
  .then((user)=>{
    return user.matchPassword(password)
  })
  .then((validation)=>{
    if(validation){
      jwt.sign({ user:email },'colapp',{expiresIn: 60*10},(err,token)=>{
        res.json({
          success: true,
          status: "Ok, logged",
          token: token
        })
      })
    }
  })
  .catch((err)=>{
    console.log(err)
  })  
};

usersCtrl.verify = (req,res)=>{
  res.json({
    success: true
  })
}

usersCtrl.logout = (req, res) => {
};

module.exports = usersCtrl;

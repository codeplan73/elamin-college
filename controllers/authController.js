const asyncHandler = require('express-async-handler')
const mysql2 = require('mysql2');
const { attachCookiesToResponse, createTokenUser } = require("./../utils"); 

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

const login = asyncHandler(async (req, res) => {
  const {stud_id, stud_class, stud_pin} = req.body;

  const q = "SELECT * FROM student_records WHERE Student_ID = ? AND Student_Class = ? ";

  db.query(q, [stud_id, stud_class, stud_pin], (err, data) => {
    if(err) return res.json(err);

    if(data == "") return res.json({msg: 'Invalid Credentials'});

    const [{ID, Fullnames}] = data
    const user = {name:Fullnames, userId:ID}
 
    const tokenUser = createTokenUser(user)
    attachCookiesToResponse({res, user:tokenUser})

    console.log(data, tokenUser)

    res.status(200).json({user: tokenUser})
  })
})

const adminLogin = asyncHandler(async(req, res) => {
  const {email, password} = req.body
  if(!email || !password){
    res.status(400)
    throw new Error('Please provide all fields')
  }

  const q = "SELECT * FROM tbl_admin WHERE email =? AND password =?";
  db.query(q, [email, password], (err, data) => {
    if(err) return res.json(err)

    if(data == "") return res.json({msg: 'Invalid Credentials'})

    const [{company, name, email, phone, address, role, admin_id}] = data;

    const user = {name, email, phone,company, address, role, userId:admin_id}

    const tokenUser = createTokenUser(user)
    attachCookiesToResponse({res, user:tokenUser})

    res.status(200).json({user:tokenUser})
  })
})

const logout = asyncHandler(async (req, res) => {
  res.cookie("token", "logout", {
        httpOnly:true,
        expires: new Date(Date.now() + 5 * 1000),
    });
    res.status(200).json({ msg: "user logged out"})
})

const adminLogout = asyncHandler(async (req, res) => {
  res.cookie("token", "Admin logout", {
        httpOnly:true,
        expires: new Date(Date.now() + 5 * 1000),
    });
    res.status(200).json({ msg: "Admin Logged out"})
})

module.exports = {
  login,
  logout,
  adminLogin,
  adminLogout
}

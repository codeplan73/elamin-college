require('dotenv').config();
require('express-async-errors');
const express = require('express'); 
// rest of the package
const morgan = require('morgan');
// const cookieParser = require("cookie-parser");

const port = process.env.PORT;

const app = express()
app.use(morgan("tiny"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

const authRouter = require('./routes/authRoutes')

app.use("/api/v1/auth", authRouter)

app.listen(port, () => {
    console.log(`server conected on port ${port}`)
})

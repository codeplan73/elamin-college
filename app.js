require('dotenv').config();
require('express-async-errors');
const express = require('express'); 

// rest of the package
const morgan = require('morgan');
const cookieParser = require("cookie-parser");
const { errorHandler } = require('./middleware/errorMiddleware')

const port = process.env.PORT;
const app = express()

// image upload with cloudinary
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2

// routes
const authRouter = require('./routes/authRoutes')
const adminRouter = require('./routes/adminRoutes')
const currentTermRouter = require('./routes/currentTermRoutes')
const eventRouter = require('./routes/eventRoutes')
const galleryRouter = require('./routes/galleryRoutes')
const generalInfoRoutes = require('./routes/generalInfoRoutes')
const resultRouter = require('./routes/resultRoutes')
const studentRouter = require('./routes/studentRoutes')
const teamRouter = require('./routes/teamRoutes')

// image upload
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
})


app.use(morgan("tiny"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.JWT_SECRET));
app.use(fileUpload({ useTempFiles: true }));

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/currentterm", currentTermRouter)
app.use("/api/v1/event", eventRouter)
app.use("/api/v1/gallery", galleryRouter)
app.use("/api/v1/info", generalInfoRoutes)
app.use("/api/v1/result", resultRouter)
app.use("/api/v1/student", studentRouter)
app.use("/api/v1/team", teamRouter)

app.use(errorHandler);
app.listen(port, () => {
    console.log(`server conected on port ${port}`)
})

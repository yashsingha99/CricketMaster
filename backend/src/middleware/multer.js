const multer = require("multer");
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "wanderlust_DEV",
        allowedFormats: ["png", "jpg", "jpeg"],
    },
});

// const upload = multer({ storage });

const upload = async (req, res, next) => {
    try { 
        console.log(req.body);
        
    const multerConfig = multer({ storage })
    multerConfig.single(req.body.avatar[0])
    // req.body.avatar ;
    next()
    } catch (error) {
        console.log("upload", error );
        // return;
    }
}

module.exports = {
    upload
}
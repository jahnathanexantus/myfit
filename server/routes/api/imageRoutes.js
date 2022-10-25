const router = require("express").Router();
// get user model
const { User, Gym, Image } = require("../../models");
const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./images");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + "--" + file.originalname);
	},
});

const upload = multer({ storage: fileStorageEngine });

router.post("/single", upload.single("image"), async (req, res) => {
	try {
		const imageData = await Image.create({
            filetype:req.file.mimetype,
            filename:req.file.originalname
        });
		console.log(req.file);
		res.send(imageData);
	} catch (err) {
		res.status(400).json(err);
	}
});

// app.post('/multiple',upload.array('image',3),(req,res)=>{
// 	console.log(res.files);
// res.send("multiple files upload success")
// })

module.exports = router;
// create router express
const router = require("express").Router();
// get user model
const { User, Gym } = require("../../models");
const bcrypt = require("bcryptjs");

router.post('/signup', async (req, res) => {
	try {
	  const newUser = req.body;
	  // hash the password from 'req.body' and save to newUser
	  newUser.password = await bcrypt.hash(req.body.password, 10);
	  // create the newUser with the hashed password and save to DB
	  const userData = await User.create(newUser);
	  res.status(200).json(userData);
	} catch (err) {
	  res.status(400).json(err);
	}
  });

router.get("/login", async (req, res) => {
	try {
		// we search the DB for a user with the provided email
		const userData = await User.findOne({ where: { email: req.body.email } });
		if (!userData) {
			// the error message shouldn't specify if the login failed because of wrong email or password
			res.status(404).json({ message: "Login failed. Please try again!" });
			return;
		}
		// use `bcrypt.compare()` to compare the provided password and the hashed password
		const validPassword = await bcrypt.compare(
			req.body.password,
			userData.password
		);
		// if they do not match, return error message
		if (!validPassword) {
			res.status(400).json({ message: "Login failed. Please try again!" });
			return;
		}
		// if they do match, return success message
		res.status(200).json({ message: "You are now logged in!" });
	} catch (err) {
		res.status(500).json(err);
	}
});

// create "get" all route
router.get("/", async (req, res) => {
	try {
		const userData = await User.findAll({
			include: [{ model: Gym }],
		});
		res.status(200).json(userData);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const userData = await User.findByPk(req.params.id, {
			include: [{ model: Gym }],
		});

		if (!userData) {
			res.status(404).json({ message: "there's no user found with that id" });
			return;
		}
		res.status(200).json(userData);
	} catch (err) {
		res.status(400).json(err);
	}
});

// create "delete" route
router.delete("/:id", async (req, res) => {
	try {
		const userData = await User.destroy({
			where: { id: req.params.id },
		});
		res.status(200).json(userData);
	} catch (err) {
		res.status(400).json(err);
	}
});

// create "update" route
router.put("/:id", async (req, res) => {
	try {
		const userData = await User.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		if (!userData[0]) {
			res.status(404).json({ message: "No Advocate with this id!" });
			return;
		}
		res.status(200).json(userData);
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;

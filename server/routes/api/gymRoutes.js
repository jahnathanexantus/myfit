const router = require("express").Router();
const { Gym, User } = require("../../models");

router.get("/", async (req, res) => {
	try {
		const gymData = await Gym.get({
			include: [{ model: User }],
		});
		res.status(200).json(gymData);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const gymData = await Gym.findByPk(req.params.id, {
			include: [{ model: User }],
		});

		if (!gymData) {
			res
				.status(404)
				.json({ message: "there's no gym found with that id" });
			return;
		}

		res.status(200).json(gymData);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.post("/", async (req, res) => {
	try {
		const gymData = await Gym.create(req.body);
        
		res.status(200).json(gymData);
       
	} catch (err) {
		res.status(400).json(err);
	}
});

// create "delete" route
router.delete("/:id", async (req, res) => {
	try {
		const gymData = await Gym.destroy({
			where: { id: req.params.id },
		});
		res.status(200).json(gymData);
	} catch (err) {
		res.status(400).json(err);
	}
});

// create "update" route
router.put("/:id", async (req, res) => {
	try {
		const gymData = await Gym.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		if (!gymData[0]) {
			res.status(404).json({ message: "No User with this id!" });
			return;
		}
		res.status(200).json(gymData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;

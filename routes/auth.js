const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../utils/validation');

//Register a user
router.post('/register', async (req, res) => {
	const {error} = registerValidation(req.body);
	if(error) return res.status(400).send(error.details[0].message);

	//Check user in database
	const emailExist = await User.findOne({ email: req.body.email });
	if(emailExist) return res.status(400).send('Email already exists.');

	//Hash passwrod
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	//new user
	const user = new User({ 
		name : req.body.name,
		email: req.body.email,
		password: hashedPassword
	});

	try {
		await user.save();
		res.status(200).json({ user: user._id });
	} catch(err) {
		res.status(400).json({ message: err.message })
	}
});

router.post('/login', async (req, res) => {
	const {error} = loginValidation(req.body);
	if(error) return res.status(400).send(error.details[0].message);

	//Check user in database
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send('Email is not found.');
	//Check password
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send('Invalid password.');

	const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
	res.header('auth-token', token).send(token);
});

module.exports = router;
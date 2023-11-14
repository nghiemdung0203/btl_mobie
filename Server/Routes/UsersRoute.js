const router = require('express').Router();
const { createManager } = require('../Controller/UserController/Manager/CreateManager');
const { CreateProfile } = require('../Controller/UserController/CreateProfile');
const { DeleteProfile } = require('../Controller/UserController/DeleteProfile');
const { GetProfiles } = require('../Controller/UserController/GetProfile');

const { SignIn } = require('../Controller/UserController/SignIn');
const { SignUp } = require('../Controller/UserController/SignUp');
const verifyToken = require('../Controller/Authentiaction');

router.post('/register', SignUp);
router.post('/signin', SignIn)
router.post('/createProfile', CreateProfile)
router.delete('/deleteProfile',verifyToken ,DeleteProfile)
router.get('/GetProfiles',verifyToken ,GetProfiles)
router.post('/createManager', createManager)

module.exports = router
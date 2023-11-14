const { CreateRestaurant } = require('../Controller/RestaurantController/CreateRestaurant');
const { DeleteRestaurant } = require('../Controller/RestaurantController/DeleteRestaurant');
const { getRestaurant} = require("../Controller/RestaurantController/GetRestaurant")

const router = require('express').Router();

router.post('/CreateRestaurant', CreateRestaurant);
router.delete('/DeleteRestaurant', DeleteRestaurant);
router.post('/getRestaurantsForManager', getRestaurant)


module.exports = router;
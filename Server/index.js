const express = require('express');
const cors = require('cors');
require("dotenv").config();
const PORT = process.env.PORT;

const UserRoutes = require('./Routes/UsersRoute');
const RestaurantRoutes = require('./Routes/RestaurantRoute')
const FoodRoutes = require('./Routes/FoodRoute')


const app = express();
app.use(express.json());
app.use(cors());
app.use('/Users', UserRoutes)
app.use('/Restaurants', RestaurantRoutes)
app.use('/Food', FoodRoutes)


app.listen(PORT, () => console.log(`listening on port ${PORT}`));
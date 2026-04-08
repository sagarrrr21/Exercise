import restaurants from "../Schemas/Restaurants.js";
import orders from "../Schemas/Orders.js";
import service_areas from "../Schemas/Service_areas.js";
import deliveryPartners from "../Schemas/Delivery_Partner.js";
import cities from "../Schemas/Cities.js";

//Given a restaurant, fetch all orders placed from that restaurant.
let given_res_name = "grinch";
let FindResturantId = (name) => {
  return restaurants.find((name) => name.resturant_name == given_res_name);
};

let ResturantId = FindResturantId(given_res_name);
console.log(ResturantId);

const getOrdersByRestaurant = (restaurantId) => {
  return orders.filter((order) => order.restaurant_id === restaurantId);
};

console.log(getOrdersByRestaurant(ResturantId.resturant_id));

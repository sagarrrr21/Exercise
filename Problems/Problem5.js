import restaurants from "../Schemas/Restaurants.js";
import orders from "../Schemas/Orders.js";
import service_areas from "../Schemas/Service_areas.js";
import deliveryPartners from "../Schemas/Delivery_Partner.js";
import cities from "../Schemas/Cities.js";

// Given a city, fetch all orders delivered in that city

let city_name = "mohali";

const findCity_id = (city) => {
  return cities.find((cities) => cities.city === city);
};
let CityIdInCities = findCity_id(city_name);

// console.log(CityIdInCities);

const findRestaurant_id = (CityId) => {
  return restaurants.filter((restaurants) => restaurants.city_id === CityId);
};

let RestaurantIdInRestaurants = findRestaurant_id(CityIdInCities.city_id);

// console.log(RestaurantIdInRestaurants);

const getOrdersByDeliveredToCity = (restaurantsInCity) => {
  const restaurantIds = restaurantsInCity.map((rest) => rest.resturant_id);
  // console.log(restaurantIds);

  return orders.filter(
    (order) =>
      restaurantIds.includes(order.restaurant_id) &&
      order.order_status === "DELIVERED",
  );
};

console.log(getOrdersByDeliveredToCity(RestaurantIdInRestaurants));

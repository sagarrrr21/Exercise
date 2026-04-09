import restaurants from "../Schemas/Restaurants.js";
import orders from "../Schemas/Orders.js";
import service_areas from "../Schemas/Service_areas.js";
import deliveryPartners from "../Schemas/Delivery_Partner.js";
import cities from "../Schemas/Cities.js";

//  Given a city and delivery partner, fetch all orders handled by that partner in that city

const City_Id = cities.find((city) => city.city.toLowerCase() == "mohali");
const PartnerId = deliveryPartners.find(
  (partner) => partner.partner_name == "Zomato Fleet",
);

// console.log(City_Id);
// console.log(PartnerId);

function getOrdersByPartnerAndCity(partnerId, cityId) {
  const cityRestaurants = restaurants.filter(
    (restaurant) => restaurant.city_id === cityId,
  );

  // console.log(cityRestaurants);
  // console.log("--------");
  const Resturant_id = cityRestaurants.map(
    (restaurant) => restaurant.resturant_id,
  );

  return orders.filter(
    (order) =>
      order.partner_id === partnerId &&
      Resturant_id.includes(order.restaurant_id),
  );
}

console.log(getOrdersByPartnerAndCity(City_Id.city_id, PartnerId.partner_id));

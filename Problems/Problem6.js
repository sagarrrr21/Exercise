import restaurants from "../Schemas/Restaurants.js";
import orders from "../Schemas/Orders.js";
import service_areas from "../Schemas/Service_areas.js";
import deliveryPartners from "../Schemas/Delivery_Partner.js";
import cities from "../Schemas/Cities.js";

// Given a delivery partner, fetch all orders handled by that partner
const Delivery_Partner = deliveryPartners.find(
  (partner) => partner.partner_name == "Zomato Fleet",
);

// console.log(Delivery_Partner);

function getOrdersByPartner(partnerId) {
  return orders.filter((order) => order.partner_id === partnerId);
}

console.log(getOrdersByPartner(Delivery_Partner.partner_id));

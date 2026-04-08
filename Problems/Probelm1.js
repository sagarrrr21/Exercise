import restaurants from "../Schemas/Restaurants.js";
import orders from "../Schemas/Orders.js";
import service_areas from "../Schemas/Service_areas.js";
import deliveryPartners from "../Schemas/Delivery_Partner.js";
import cities from "../Schemas/Cities.js";

// Given a delivery pincode, find all orders delivered to that pincode.

let given_pincode = 400150;

const getOrderByDeliveredToPincode = (pincode) => {
  return orders.filter(
    (orders) =>
      orders.delivery_pincode === pincode &&
      orders.order_status === "DELIVERED",
  );
};

console.log(getOrderByDeliveredToPincode(given_pincode));

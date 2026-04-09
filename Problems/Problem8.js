import restaurants from "../Schemas/Restaurants.js";
import orders from "../Schemas/Orders.js";
import service_areas from "../Schemas/Service_areas.js";
import deliveryPartners from "../Schemas/Delivery_Partner.js";
import cities from "../Schemas/Cities.js";

//  Given a pincode prefix (first 3 digits), fetch all orders where delivery pincode starts with that prefix
function getOrdersByPincodePrefix(prefix) {
  return orders.filter((order) =>
    String(order.delivery_pincode).startsWith(String(prefix)),
  );
}

console.log(getOrdersByPincodePrefix("400"));

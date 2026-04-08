import restaurants from "../Schemas/Restaurants.js";
import orders from "../Schemas/Orders.js";
import service_areas from "../Schemas/Service_areas.js";
import deliveryPartners from "../Schemas/Delivery_Partner.js";
import cities from "../Schemas/Cities.js";

//Given a customer name, fetch all orders placed by that customer.
const getOrdersByCustomer = (customerName) => {
  return orders.filter(
    (order) => order.customer_name.toLowerCase() == customerName.toLowerCase(),
  );
};
console.log(getOrdersByCustomer("sagar"));

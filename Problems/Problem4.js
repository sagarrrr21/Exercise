import restaurants from "../Schemas/Restaurants.js";
import orders from "../Schemas/Orders.js";
import service_areas from "../Schemas/Service_areas.js";
import deliveryPartners from "../Schemas/Delivery_Partner.js";
import cities from "../Schemas/Cities.js";

// Given a date range, fetch all orders placed within that range

let start_date = "2024-03-18 14:00:00";
let end_date = "2024-03-17 14:30:00";

const getOrdersByDateRange = (st_date, en_date) => {
  return orders.filter(
    (orders) => orders.order_time >= st_date && orders.delivery_time <= en_date,
  );
};

console.log(getOrdersByDateRange(start_date, end_date));

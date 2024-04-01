import {SalesOrder} from "./sales/domain/model/sales-order";

const order = new SalesOrder(1);
order.addItem(1, 2, 100);
order.addItem(2, 1, 50);
console.log(order.calculateTotalPrice());

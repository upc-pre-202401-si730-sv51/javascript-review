import {SalesOrderItem} from "./sales-order-item";

export class SalesOrder {
    constructor(customerId) {
        this._id = null;
        this._customerId = customerId;
        this._items = [];
    }

    get id() {
        return this._id;
    }

    addItem(productId, quantity, unitPrice) {
        this._items.push(new SalesOrderItem(this._id, productId, quantity, unitPrice));
    }

    calculateTotalPrice() {
        return this._items.reduce((total, item) => total + item.calculateItemPrice(), 0);
    }

}
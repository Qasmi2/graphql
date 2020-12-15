"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_model_1 = require("./products.model");
const products = [];
products.push(new products_model_1.Product(1, 'Amazing Graphql Product', 'my product one description', 100));
products.push(new products_model_1.Product(2, 'Amazing second Graphql Product', 'My second simple Node.js API tutorial', 250));
exports.productsSample = products;

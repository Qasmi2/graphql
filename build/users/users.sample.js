"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_1 = require("./users.model");
const users = [];
users.push(new users_model_1.User(1, 'Marcos', 'Silva', 'marcos.henrique@toptal.com', '2r828hEoPkDYwj26RWC3tg==$Q1kb3HB+csO65uSVTURrANZiaut2FibpfavNGgU8WZxnJodKbj9JtTSs8O466aii+wGSN9bMUwK3OJNHKcvVMg==', 9));
users.push(new users_model_1.User(2, 'Silva', 'Marcos', 'my.second.email@toptal.com', '2r828hEoPkDYwj26RWC3tg==$Q1kb3HB+csO65uSVTURrANZiaut2FibpfavNGgU8WZxnJodKbj9JtTSs8O466aii+wGSN9bMUwK3OJNHKcvVMg==', 1));
users.push(new users_model_1.User(3, 'Nadeem', 'Qasmi', 'my.testing.email@toptal.com', '2r828hEoPkDYwj26RWC3tg==$Q1kb3HB+csO65uSVTURrANZiaut2FibpfavNGgU8WZxnJodKbj9JtTSs8O466aii+wGSN9bMUwK3OJNHKcvVMg==', 3));
exports.usersSample = users;

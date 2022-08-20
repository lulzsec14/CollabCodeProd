"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var db_1 = __importDefault(require("./db"));
var uuidv4_1 = require("uuidv4");
var Room = /** @class */ (function () {
    function Room(data) {
        this.data = data;
    }
    Room.create = function (data, callback) {
        data.id = (0, uuidv4_1.uuid)();
        db_1.default.query('INSERT INTO rooms SET ? ', data, function (error, res) {
            if (error) {
                callback({ error: error, message: 'Mysql error' });
            }
            else {
                callback(null, __assign({}, data));
            }
        });
    };
    Room.findById = function (id, callback) {
        db_1.default.query('SELECT * FROM rooms where id = ?', [id], function (error, res) {
            if (error) {
                callback({ error: error, message: 'Mysql error' });
            }
            else if (!res.length) {
                callback({ message: 'No room found' });
            }
            else {
                callback(null, res[0]);
            }
        });
    };
    Room.updateById = function (data, callback) {
        db_1.default.query('UPDATE rooms SET ? WHERE id = ?', [data, data.id], function (error, res) {
            if (error) {
                callback({ error: error, message: 'Mysql error' });
            }
            else if (!res.affectedRows) {
                callback({ message: 'No room found' });
            }
            else {
                callback(null, data);
            }
        });
    };
    return Room;
}());
module.exports = Room;

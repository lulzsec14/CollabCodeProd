"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var room_model_1 = __importDefault(require("./../models/room.model"));
var utils_1 = require("./../utils");
var uuidv4_1 = require("uuidv4");
var router = express_1.default.Router();
router.get('/:id', function (req, res) {
    var id = req.params.id;
    // Keeping number for legacy part
    if (!(0, uuidv4_1.isUuid)(id) && isNaN(+id)) {
        return (0, utils_1.sendError)(res, 'Not a valid id');
    }
    room_model_1.default.findById(id, function (error, data) {
        console.log(error);
        if (error) {
            (0, utils_1.sendError)(res, error.message);
        }
        else {
            (0, utils_1.sendSuccess)(res, 'Room fetched successfully', data);
        }
    });
});
router.patch('/:id', function (req, res) {
    var _a = req.body, title = _a.title, body = _a.body, input = _a.input, language = _a.language;
    if (!title)
        return (0, utils_1.sendError)(res, "Title can't be empty");
    var id = req.params.id;
    // Keeping number for legacy part
    if (!(0, uuidv4_1.isUuid)(id) && isNaN(+id)) {
        return (0, utils_1.sendError)(res, 'Not a valid id');
    }
    room_model_1.default.updateById({ title: title, body: body, id: id, input: input, language: language }, function (error, data) {
        console.log(error);
        if (error) {
            (0, utils_1.sendError)(res, error.message);
        }
        else {
            (0, utils_1.sendSuccess)(res, 'Room updated successfully', data);
        }
    });
});
router.post('/', function (req, res) {
    var _a = req.body, title = _a.title, body = _a.body, input = _a.input, language = _a.language;
    if (!title)
        return (0, utils_1.sendError)(res, "Title can't be empty");
    room_model_1.default.create({ title: title, body: body, input: input, language: language }, function (error, data) {
        console.log(error);
        if (error) {
            (0, utils_1.sendError)(res, error.message);
        }
        else {
            (0, utils_1.sendSuccess)(res, 'Room created successfully', data);
        }
    });
});
module.exports = router;

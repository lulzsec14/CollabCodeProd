"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendError = exports.sendSuccess = void 0;
var sendData = function (res, message, data, success, status) {
    res.status(status).send({
        success: success,
        message: message,
        data: data
    });
};
function sendSuccess(res, message, data, status) {
    if (status === void 0) { status = 200; }
    sendData(res, message, data, true, status);
}
exports.sendSuccess = sendSuccess;
function sendError(res, message, data, status) {
    if (data === void 0) { data = {}; }
    if (status === void 0) { status = 400; }
    sendData(res, message, data, false, status);
}
exports.sendError = sendError;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTours = void 0;
function getTours() {
    fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/')
        .then(function (response) { return response.json(); })
        .then(function (json) { return console.log(json); });
}
exports.getTours = getTours;
//# source  MappingURL=tours.js.map
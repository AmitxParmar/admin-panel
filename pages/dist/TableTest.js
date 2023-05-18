"use strict";
exports.__esModule = true;
var TableRef_1 = require("@/components/TableRef");
var react_1 = require("react");
var TableTest = function (props) {
    var data = [{
            title: "Company Name",
            id: "Link"
        }, {
            title: "Company Name",
            id: "Link"
        }, {
            title: "Company Name",
            id: "Link"
        }, {
            title: "Company Name",
            id: "Link"
        }, {
            title: "Company Name",
            id: "Link"
        },];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(TableRef_1["default"], { data: data })));
};
exports["default"] = TableTest;

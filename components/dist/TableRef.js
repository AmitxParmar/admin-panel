'use-client';
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var TableRef = function (props) {
    var numColumns = props.data.length;
    return (react_1["default"].createElement("div", { className: "w-full" },
        react_1["default"].createElement("div", { className: "bg-white shadow-md rounded my-6" },
            react_1["default"].createElement("div", { className: "table-responsive" },
                react_1["default"].createElement("table", { className: "table-auto w-full" },
                    react_1["default"].createElement("tbody", null, __spreadArrays(Array(7)).map(function (_, i) { return (react_1["default"].createElement("tr", { key: i }, __spreadArrays(Array(numColumns)).map(function (_, j) {
                        var _a;
                        return (react_1["default"].createElement("td", { key: j, className: "border hover:bg-emphasis cursor-pointer px-4 py-2" },
                            react_1["default"].createElement(link_1["default"], { key: i, href: "/companies/" + props.data.id }, (_a = props.data[j]) === null || _a === void 0 ? void 0 : _a.title)));
                    }))); })))))));
};
exports["default"] = TableRef;

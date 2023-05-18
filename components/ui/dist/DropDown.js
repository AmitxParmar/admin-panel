"use strict";
exports.__esModule = true;
var react_1 = require("react");
var select_1 = require("@/components/ui/select");
var DropDown = function (props) {
    return (react_1["default"].createElement(select_1.Select, null,
        react_1["default"].createElement(select_1.SelectTrigger, { className: "" },
            react_1["default"].createElement(select_1.SelectValue, { placeholder: props.text })),
        react_1["default"].createElement(select_1.SelectContent, null, props.options.map(function (item, index) { return (react_1["default"].createElement(select_1.SelectItem, { key: index, value: item }, item)); }))));
};
exports["default"] = DropDown;

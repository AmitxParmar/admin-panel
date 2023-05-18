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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Input = void 0;
var React = require("react");
var utils_1 = require("@/lib/utils");
var Input = React.forwardRef(function (_a, ref) {
    var className = _a.className, type = _a.type, props = __rest(_a, ["className", "type"]);
    return (React.createElement("input", __assign({ type: type, className: utils_1.cn("hover:border-emphasis border-default bg-default placeholder:text-muted text-emphasis min-h-9 mb-2 block rounded-md border py-2 px-3 text-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1 w-full disabled:bg-muted disabled:hover:border-subtle disabled:cursor-not-allowed", className), ref: ref }, props)));
});
exports.Input = Input;
Input.displayName = "Input";

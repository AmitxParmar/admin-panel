"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Input_1 = require("@/components/AdminPanel/Input");
var QuillEditor_1 = require("@/components/Editor/QuillEditor");
var DropDown_1 = require("@/components/ui/DropDown");
var Create = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "max-w-[950px] flex-auto max-h-[950px] min-w-full overflow-hidden" },
            react_1["default"].createElement("form", { className: "border border-emphasis  rounded-lg p-4" },
                react_1["default"].createElement("div", { className: "flex flex-row justify-around items-center max-w-full" },
                    react_1["default"].createElement("div", { className: "flex flex-col relative" },
                        react_1["default"].createElement("div", { className: "w-full h-[37px] m-3" },
                            react_1["default"].createElement(Input_1.Input, { className: "min-w-max", type: "text", placeholder: "Company Name" })),
                        react_1["default"].createElement("div", { className: "w-full h-[37px] m-3" },
                            react_1["default"].createElement(Input_1.Input, { className: "min-w-max max-w-[350px]", type: "text", placeholder: "Tagline" })),
                        react_1["default"].createElement("div", { className: "w-full h-[37px] m-3" },
                            react_1["default"].createElement(Input_1.Input, { className: "min-w-max max-w-[350px]", type: "text", placeholder: "Tags" }))),
                    react_1["default"].createElement("div", { className: "overflow-y-hidden  w-full max-w-[550px] h-[190px] max-h-[190px]" },
                        react_1["default"].createElement(QuillEditor_1["default"], null))),
                react_1["default"].createElement("div", { className: "flex flex-row justify-around mt-6" },
                    react_1["default"].createElement("div", { className: "max-w-[750px] w-[750px] h-[400px] max-h-[400px] overflow-hidden scrollbar-thin m-2 my-auto " },
                        react_1["default"].createElement(QuillEditor_1["default"], null)),
                    react_1["default"].createElement("div", { className: "flex flex-col items-center " },
                        react_1["default"].createElement("div", { className: "h-[90px] mb-5 text-white rounded-full w-[90px] bg-black" }, "Logo URL"),
                        react_1["default"].createElement("div", { className: "w-[120px] h-[37px] m-2" },
                            react_1["default"].createElement(Input_1.Input, { placeholder: "Logo URL" })),
                        react_1["default"].createElement("div", { className: "w-[120px] min-w-[120px] h-[37px] m-2" },
                            react_1["default"].createElement(DropDown_1["default"], { text: "No. of E", options: ["1-10", "11-25", "26-50", "51-100", "100+"] })),
                        react_1["default"].createElement("div", { className: "w-[120px] h-[37px] m-2" },
                            react_1["default"].createElement(Input_1.Input, { className: "text-sm w-[120px] max-w-[120px]", placeholder: "No of M" })),
                        react_1["default"].createElement("div", { className: "w-[92px] min-w-[120px] h-[37px] m-2" },
                            react_1["default"].createElement(Input_1.Input, { type: "text", placeholder: "Funding" })))),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement("div", { className: "w-[320px] h-[340px] max-h-[340px] m-2" }),
                    react_1["default"].createElement("div", { className: "w-[550px] h-[340px] max-h-[340px] m-2" })),
                react_1["default"].createElement("div", { className: "flex justify-end w-[875px]" })))));
};
exports["default"] = Create;

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("next/router");
var link_1 = require("next/link");
var google_1 = require("next/font/google");
var inter = google_1.Inter({ subsets: ['latin'] });
var SettingNav = function (_a) {
    var children = _a.children;
    var router = router_1.useRouter();
    return (react_1["default"].createElement("nav", { className: inter.className + " transition-transform scrollbar-thin min-w-56 px-2 overflow-y-scroll pb-3 max-lg:z-10 lg:flex -translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100 max-h-screen left-0 top-0 text-emphasis bg-muted overflow-x-hidden sticky" },
        react_1["default"].createElement("div", { className: "w-full flex flex-col" },
            react_1["default"].createElement("button", { onClick: function (e) {
                    e.preventDefault();
                    router.back();
                }, className: "hover:bg-subtle max-w-full [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default text-emphasis group my-6 flex h-6 max-h-6 w-64 flex-row items-center rounded-md py-2 px-3 text-sm font-medium leading-4" },
                react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#374151", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4 stroke-[2px] mr-[10px] rtl:ml-[10px] md:mt-0" },
                    react_1["default"].createElement("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
                    react_1["default"].createElement("polyline", { points: "12 19 5 12 12 5" })),
                react_1["default"].createElement("p", { title: 'back', className: "max-w-36 min-h-4 truncate" }, "Back")),
            react_1["default"].createElement("div", { className: "" },
                react_1["default"].createElement("div", { className: 'mt-' },
                    react_1["default"].createElement("div", { className: "[&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis text-default group flex h-9 w-64 flex-row items-center rounded-md px-2 text-sm font-medium leading-none" },
                        react_1["default"].createElement("img", { className: "h-4 w-4 rounded-full mr-3 ltr:mr-3 rtl:ml-3", src: "https://www.gravatar.com/avatar/fallback?s=160&d=mp&r=PG", alt: "User Avatar" }),
                        react_1["default"].createElement("p", { className: "text-sm font-medium leading-5" }, "AMit Parmar"))),
                react_1["default"].createElement("div", { className: 'my-2 space-y-1' },
                    react_1["default"].createElement(link_1["default"], { href: "/settings/my-account/profile", className: "text-emphasis font-medium text-sm min-h-8 hover:bg-subtle [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default max-w-[156px] group flex flex-row items-center rounded-md px-3 py-[10px] ml-7 max-w-6 mr-5 rtl:ml-5 my-0.5 h-7 false font-inter " + ((router.pathname === "/settings/my-account/profile") ? "bg-emphasis" : "") }, "Profile"),
                    react_1["default"].createElement(link_1["default"], { href: "/settings/my-account/profile", className: "text-emphasis font-medium text-sm min-h-8 hover:bg-subtle [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default max-w-[156px] group flex flex-row items-center rounded-md px-3 py-[10px] ml-7 max-w-6 mr-5 rtl:ml-5 my-0.5 h-7 false font-inter " + ((router.pathname === "/settings/my-account/general") ? "bg-emphasis" : "") }, "General"),
                    react_1["default"].createElement(link_1["default"], { href: "/settings/my-account/profile", className: "text-emphasis font-medium text-sm min-h-8 hover:bg-subtle [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default  group flex flex-row items-center rounded-md px-3 py-[10px] ml-7 max-w-6 mr-5 rtl:ml-5 my-0.5 h-7 false font-inter " + ((router.pathname === "/settings/my-account/calender") ? "bg-emphasis" : "") }, "Calendars"),
                    react_1["default"].createElement(link_1["default"], { href: "/settings/my-account/profile", className: "text-emphasis font-medium text-sm min-h-8 hover:bg-subtle [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default max-w-[156px] group flex flex-row items-center rounded-md px-3 py-[10px] ml-7 max-w-6 mr-5 rtl:ml-5 my-0.5 h-7 false font-inter " + ((router.pathname === "/settings/my-account/conferencing") ? "bg-emphasis" : "") }, "Conferencing"),
                    react_1["default"].createElement(link_1["default"], { href: "/settings/my-account/profile", className: "text-emphasis font-medium text-sm min-h-8 hover:bg-subtle [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default max-w-[156px] group flex flex-row items-center rounded-md px-3 py-[10px] ml-7 max-w-6 mr-5 rtl:ml-5 my-0.5 h-7 false font-inter " + ((router.pathname === "/settings/my-account/appearance") ? "bg-emphasis" : "") }, "Appearance"))),
            children)));
};
exports["default"] = SettingNav;

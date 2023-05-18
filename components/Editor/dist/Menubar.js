"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("@/styles/Menubar.module.css");
var extension_color_1 = require("@tiptap/extension-color");
var extension_list_item_1 = require("@tiptap/extension-list-item");
var extension_bullet_list_1 = require("@tiptap/extension-bullet-list");
var extension_text_style_1 = require("@tiptap/extension-text-style");
var react_2 = require("@tiptap/react");
var starter_kit_1 = require("@tiptap/starter-kit");
var bi_1 = require("react-icons/bi");
var fi_1 = require("react-icons/fi");
var gr_1 = require("react-icons/gr");
var md_1 = require("react-icons/md");
var vsc_1 = require("react-icons/vsc");
var MenuBar = function (_a) {
    var editor = _a.editor;
    if (!editor) {
        return null;
    }
    return (react_1["default"].createElement("div", { className: 'bg-gray-100 sticky w-full' },
        react_1["default"].createElement("button", { onClick: function (e) {
                e.preventDefault();
                editor.chain().focus().toggleBold().run();
            }, disabled: !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run(), className: "rounded-md p-2 m-1 hover:bg-emphasis " + (editor.isActive('bold') ? 'is-active' : '') },
            react_1["default"].createElement(fi_1.FiBold, { fontSize: 20 })),
        react_1["default"].createElement("button", { onClick: function (e) {
                e.preventDefault();
                editor.chain().focus().toggleItalic().run();
            }, disabled: !editor.can()
                .chain()
                .focus()
                .toggleItalic()
                .run(), className: "rounded-md p-2 m-1 hover:bg-emphasis " + (editor.isActive('italic') ? 'is-active' : '') },
            react_1["default"].createElement(fi_1.FiItalic, { fontSize: 20 })),
        react_1["default"].createElement("button", { onClick: function (e) {
                e.preventDefault();
                editor.chain().focus().toggleStrike().run();
            }, disabled: !editor.can()
                .chain()
                .focus()
                .toggleStrike()
                .run(), className: "rounded-md  p-2 m-1  hover:bg-emphasis " + (editor.isActive('strike') ? 'is-active' : '') },
            react_1["default"].createElement(gr_1.GrStrikeThrough, { fontSize: 20 })),
        react_1["default"].createElement("button", { className: " rounded-md p-2 m-1 hover:bg-emphasis", onClick: function (e) {
                e.preventDefault();
                editor.chain().focus().undo().run();
            }, disabled: !editor.can()
                .chain()
                .focus()
                .undo()
                .run() },
            react_1["default"].createElement(bi_1.BiUndo, { fontSize: 20 })),
        react_1["default"].createElement("button", { className: " rounded-md p-2 m-1 hover:bg-emphasis", onClick: function (e) {
                e.preventDefault();
                editor.chain().focus().redo().run();
            }, disabled: !editor.can()
                .chain()
                .focus()
                .redo()
                .run() },
            react_1["default"].createElement(bi_1.BiRedo, { fontSize: 20 })),
        react_1["default"].createElement("button", { onClick: function (e) {
                e.preventDefault();
                editor.chain().focus().toggleBulletList().run();
            }, className: " rounded-md  p-2 m-1  hover:bg-emphasis " + (editor.isActive('bulletList') ? 'is-active' : '') },
            react_1["default"].createElement(md_1.MdFormatListBulleted, { fontSize: 20 })),
        react_1["default"].createElement("button", { onClick: function (e) {
                e.preventDefault();
                editor.chain().focus().toggleOrderedList().run();
            }, className: "rounded-md p-2 m-1 hover:bg-emphasis " + (editor.isActive('orderedList') ? 'is-active' : '') },
            react_1["default"].createElement(vsc_1.VscListOrdered, { fontSize: 20 }))));
};
function TipTapEditor(_a) {
    var placeholder = _a.placeholder;
    var editor = react_2.useEditor({
        onUpdate: (function (text) { return console.log(text); }),
        editorProps: {
            attributes: {
                "class": "focus:outline-none  pl-6 list-disc list-decimal  border placeholder:text-black border-black h-screen overflow-x-hidden min-h-full overflow-y-scroll  scrollbar-thin max-w-full border"
            }
        },
        extensions: [
            extension_color_1.Color.configure({ types: [extension_text_style_1["default"].name, extension_list_item_1["default"].name] }),
            /* TextStyle.configure({ types: [ListItem.name] }), */
            starter_kit_1["default"].configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: true
                }
            }),
            extension_bullet_list_1["default"].configure({
                HTMLAttributes: {
                    "class": 'list-disc'
                }
            })
        ]
    });
    var options = { placeholder: 'Enter your text here' };
    editor === null || editor === void 0 ? void 0 : editor.setOptions(options);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(MenuBar, { editor: editor }),
        react_1["default"].createElement(react_2.EditorContent, { editor: editor })));
}
exports["default"] = TipTapEditor;

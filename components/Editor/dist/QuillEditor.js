"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("react-quill/dist/quill.snow.css");
var dynamic_1 = require("next/dynamic");
var QuillNoSSRWrapper = dynamic_1["default"](Promise.resolve().then(function () { return require('react-quill'); }), {
    ssr: false,
    loading: function () { return react_1["default"].createElement("p", null, "Loading ..."); }
});
var modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false
    }
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
var formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
];
function QuillEditor(_a) {
    return (react_1["default"].createElement(QuillNoSSRWrapper, { formats: formats, className: 'min-h-full h-full scrollbar-thin', theme: "snow" }));
}
exports["default"] = QuillEditor;

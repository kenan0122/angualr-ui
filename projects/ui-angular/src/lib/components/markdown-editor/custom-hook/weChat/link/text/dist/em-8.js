"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.em_8 = void 0;
var customHook_1 = require("../../../customHook");
var Em8 = /** @class */ (function (_super) {
    __extends(Em8, _super);
    function Em8() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preSetType = customHook_1.INavigationType.Text;
        _this.css = _this._getCss();
        _this.render = function (leadingChar, text, link, title, ref, target) {
            return _this._getHtmlTemplate(title, text);
        };
        _this.createTemplate = function () {
            return "[\u6807\u98984](em-8)";
        };
        _this.getHtml = function () {
            return _this._getHtmlTemplate('', '标题4');
        };
        return _this;
    }
    Em8.prototype._getHtmlTemplate = function (title, text) {
        return "<h4 class=\"link-em-8\">" + text + "</h4>";
    };
    Em8.prototype._getCss = function () {
        return "\n      .kingfar-wechat .link-em-8 {\n        font-size: 16px;\n        margin:10px 0;\n        display:inline-block\n      }\n   ";
    };
    return Em8;
}(customHook_1.LinkConfig));
exports.em_8 = new Em8();

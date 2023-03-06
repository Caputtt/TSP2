"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalService = void 0;
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
        modal.element.classList.add('opacity-0');
    };
    ModalService.prototype.remove = function () {
        var modal = document.getElementById(this.id);
        modal.parentNode.removeChild(modal);
    };
    ModalService.prototype.open = function (template) {
        if (template === void 0) { template = null; }
        var divWrap = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = this.id;
        divWrap.setAttribute('modal-id', this.id);
        divWrap.classList.add('modal-element');
        document.body.appendChild(divWrap);
    };
    return ModalService;
}());
exports.ModalService = ModalService;
//# sourceMappingURL=modalService.js.map
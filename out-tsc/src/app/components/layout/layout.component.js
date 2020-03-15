import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LayoutComponent = class LayoutComponent {
    constructor() {
        // sidebar 
        this.isCollapsed = false;
        this.toggleText = "Collaspe Menu";
    }
    ngOnInit() {
    }
    trigger() {
        this.isCollapsed ? this.toggleText = "Collaspe Menu" : this.toggleText = "";
    }
};
LayoutComponent = __decorate([
    Component({
        selector: 'app-layout',
        templateUrl: './layout.component.html',
        styleUrls: ['./layout.component.scss']
    })
], LayoutComponent);
export { LayoutComponent };
//# sourceMappingURL=layout.component.js.map
'use strict';
import { Component, EventEmitter, Output, Input } from '@angular/core';
var Zippy = /** @class */ (function () {
    function Zippy() {
        this.type = 'general';
        this.empty = false;
        this.headless = false;
        this.open = false;
        this.openChange = new EventEmitter();
    }
    Zippy.prototype.toggle = function () {
        this.open = !this.open;
        if (this.empty)
            return;
        this.openChange.emit(this.open);
    };
    Zippy.prototype.ngOnChanges = function (ch) {
        if (ch.open.currentValue === true) {
            this.openChange.emit(ch.open.currentValue);
        }
    };
    Zippy.decorators = [
        { type: Component, args: [{
                    selector: 'zippy',
                    template: '<div class="zippy zippy-{{type}}" [ngClass]="{\'zippy-empty\': empty, \'zippy-hidden\': !open}"><div *ngIf="!headless" class="zippy-title" (click)="toggle()"><span class="zippy-indicator"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "/></svg> </span><span class="zippy-title-content" [innerHtml]="title"></span></div><div class="zippy-content"><ng-content></ng-content></div></div>',
                    styles: ['@charset "UTF-8";:host{overflow:hidden;display:block}.zippy-title{padding:10px;border-radius:2px;margin-bottom:4px;line-height:1.5em;background-color:#f2f2f2;cursor:pointer}.zippy-success>.zippy-title{color:#00aa13;background-color:rgba(0,170,19,.08)}.zippy-error>.zippy-title{color:#e53935;background-color:rgba(229,57,53,.06)}.zippy-redirect>.zippy-title{color:#263238;background-color:rgba(38,50,56,.08)}.zippy-info>.zippy-title{color:#0033a0;background-color:rgba(0,51,160,.08)}.zippy-title /deep/ p{font-weight:400}.zippy-indicator svg{height:1.2em;width:1.2em;vertical-align:top;transition:all .3s ease;transform:rotateZ(-180deg)}.zippy-hidden>.zippy-title svg{transform:rotateZ(0)}.zippy-success>.zippy-title polygon{fill:#00aa13}.zippy-error>.zippy-title polygon{fill:#e53935}.zippy-redirect>.zippy-title polygon{fill:#263238}.zippy-info>.zippy-title polygon{fill:#0033a0}span.zippy-indicator{width:1em;font-size:1.2em;text-align:center;display:inline-block;float:left;margin-right:5px}.zippy-empty .zippy-content,.zippy-empty .zippy-indicator svg,.zippy-hidden>.zippy-content{display:none}.zippy-content{padding:15px 0}.zippy-empty .zippy-title{cursor:default}.zippy-empty .zippy-indicator:before{content:"—";font-weight:700}']
                },] },
    ];
    /** @nocollapse */
    Zippy.ctorParameters = function () { return []; };
    Zippy.propDecorators = {
        'type': [{ type: Input },],
        'empty': [{ type: Input },],
        'title': [{ type: Input },],
        'headless': [{ type: Input },],
        'open': [{ type: Input },],
        'openChange': [{ type: Output },],
    };
    return Zippy;
}());
export { Zippy };
//# sourceMappingURL=zippy.js.map
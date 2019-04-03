webpackJsonp([1,4],{

/***/ 348:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 348;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(458);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/ignatiusvanniekerk/dev/gaap/src/main.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Gaap Test';
        this.toDisplay = 1;
    }
    AppComponent.prototype.changeQuestion = function (question) {
        this.toDisplay = question;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(622),
            styles: [__webpack_require__(618)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/ignatiusvanniekerk/dev/gaap/src/app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pyramid_pyramid_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__array_schema_colours_array_schema_colours_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_changer_data_changer_component__ = __webpack_require__(460);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pyramid_pyramid_component__["a" /* PyramidComponent */],
                __WEBPACK_IMPORTED_MODULE_6__array_schema_colours_array_schema_colours_component__["a" /* ArraySchemaColoursComponent */],
                __WEBPACK_IMPORTED_MODULE_7__data_changer_data_changer_component__["a" /* DataChangerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/ignatiusvanniekerk/dev/gaap/src/app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArraySchemaColoursComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArraySchemaColoursComponent = (function () {
    function ArraySchemaColoursComponent() {
        /**
         * Mock data to be used.
         * @type { Array<ArraySchema> }
         */
        this.colourSchema = [
            { type: 'Red', value: 1, enabled: true },
            { type: 'Red', value: 1, enabled: true },
            { type: 'Green', value: 1, enabled: true },
            { type: 'Green', value: 1, enabled: true },
            { type: 'Blue', value: 1, enabled: true },
            { type: 'Blue', value: 1, enabled: true },
            { type: 'Red', value: 1, enabled: true },
            { type: 'Red', value: 1, enabled: true }
        ];
        /**
         * Total calculated value
         * @type { number }
         */
        this.totalValue = 0;
    }
    /**
     * When mock data should be used
     */
    ArraySchemaColoursComponent.prototype.useMockData = function () {
        this.calculateArray = null;
        this.calculateArray = this.colourSchema;
    };
    /**
     * Calculates the sum of the array.
     */
    ArraySchemaColoursComponent.prototype.calculateSum = function () {
        var _this = this;
        this.totalValue = 0;
        this.calculateArray.forEach(function (entry) {
            switch (entry.type) {
                case 'Red': {
                    entry.enabled ? _this.totalValue += entry.value : _this.totalValue = 0; // anything times 0 should be zero
                    break;
                }
                case 'Blue': {
                    entry.enabled ? _this.totalValue -= entry.value : _this.totalValue = 0; // anything times 0 should be zero
                    break;
                }
                case 'Green': {
                    entry.enabled ? _this.totalValue *= entry.value : _this.totalValue = 0; // anything times 0 should be zero
                    break;
                }
                default: {
                    // adding zero stays the same amount when no type is added.
                    _this.totalValue; // adding zero stays the same amount.
                    break;
                }
            }
        });
    };
    ArraySchemaColoursComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-array-schema-colours',
            template: __webpack_require__(623),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [])
    ], ArraySchemaColoursComponent);
    return ArraySchemaColoursComponent;
}());
//# sourceMappingURL=/Users/ignatiusvanniekerk/dev/gaap/src/array-schema-colours.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataChangerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataChangerComponent = (function () {
    function DataChangerComponent() {
        /**
         * Array of changeable properties
         * @type { Array<string> }
         */
        this.allowedToChange = ['qty', 'unitCostExcluding',
            'lineTotalExcluding', 'lineTotalIncluding'];
        /**
         * Array of unchangeable properties
         * @type { Array<string> }
         */
        this.toExclude = ['id', 'name', 'taxPercentage', 'lineTotalTax'];
        /**
         * Change object.
         * @type {selectedField: string, itemValue: number}
         */
        this.changeObj = { selectedField: 'qty', itemValue: 0 };
        /**
         * Mock data to be used.
         * @type { Array<DataSource> }
         */
        this.mockData = [
            { id: 1, name: 'coke', taxPercentage: 15, qty: 10, unitCostExcluding: 10,
                lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4 },
            { id: 2, name: 'pepsi', taxPercentage: 15, qty: 11, unitCostExcluding: 10,
                lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4 },
            { id: 3, name: 'sprite', taxPercentage: 15, qty: 12, unitCostExcluding: 10,
                lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4 },
            { id: 4, name: 'coke light', taxPercentage: 15, qty: 13, unitCostExcluding: 10,
                lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4 },
            { id: 5, name: 'coke zero', taxPercentage: 15, qty: 14, unitCostExcluding: 10,
                lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4 },
            { id: 6, name: 'cream soda', taxPercentage: 15, qty: 15, unitCostExcluding: 10,
                lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4 },
            { id: 7, name: '7up', taxPercentage: 15, qty: 16, unitCostExcluding: 10,
                lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4 },
            { id: 8, name: '7up light', taxPercentage: 15, qty: 17, unitCostExcluding: 10,
                lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4 }
        ];
    }
    /**
     * Changes the value of the mockData table.
     *
     * @param { number } rowNumber
     * @param { selectedField: string, itemValue: number} changeObj
     */
    DataChangerComponent.prototype.changeValues = function (rowNumber, changeObj) {
        if (this.toExclude.indexOf(changeObj.selectedField) !== -1 || rowNumber > this.mockData.length) {
            alert('Please try again, does not meet the minimum requirements');
        }
        else {
            this.mockData[rowNumber][changeObj.selectedField] = changeObj.itemValue;
        }
    };
    DataChangerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-data-changer',
            template: __webpack_require__(624),
            styles: [__webpack_require__(620)]
        }), 
        __metadata('design:paramtypes', [])
    ], DataChangerComponent);
    return DataChangerComponent;
}());
//# sourceMappingURL=/Users/ignatiusvanniekerk/dev/gaap/src/data-changer.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PyramidComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PyramidComponent = (function () {
    function PyramidComponent() {
        /**
         * Pyramid row number
         * @type { number }
         */
        this.pyramidRowNumber = 0;
        /**
         * Row number
         * @type { number }
         */
        this.rowNumber = 0;
    }
    /**
     * Create the Pyramid Array.
     */
    PyramidComponent.prototype.createPyramidArray = function () {
        if (this.pyramidRowNumber < 1) {
            alert('must enter row number');
        }
        else {
            this.pyramidOddArray = new Array();
            this.currentOdd = 1;
            for (var step = 0; step < this.pyramidRowNumber; step++) {
                this.pyramidOddArray.push(this.createInnerArray(step));
                this.currentOdd += 2;
            }
        }
    };
    /**
     * Creates the internal array
     *
     * @param { number } entry
     * @return { Array<number> }
     */
    PyramidComponent.prototype.createInnerArray = function (entry) {
        var innerArray = [this.currentOdd];
        for (var step = 0; step < entry; step++) {
            innerArray.push(this.currentOdd += 2);
        }
        return innerArray;
    };
    /**
     * Calculates the value of the row.
     */
    PyramidComponent.prototype.sumOfRow = function (rowNumber) {
        // check if a value and right value is inserted
        if (!rowNumber || this.pyramidOddArray.length + 1 <= rowNumber || this.pyramidOddArray.length + 1 < 0) {
            alert('row number may not exceed ' + this.pyramidOddArray.length + ' or be less the 0');
        }
        else {
            // Actuall answer
            var pyramidObj = this.pyramidOddArray[rowNumber - 1];
            this.sumTotal = pyramidObj.reduce(function (a, b) { return a + b; }, 0);
        }
    };
    PyramidComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-pyramid',
            template: __webpack_require__(625),
            styles: [__webpack_require__(621)]
        }), 
        __metadata('design:paramtypes', [])
    ], PyramidComponent);
    return PyramidComponent;
}());
//# sourceMappingURL=/Users/ignatiusvanniekerk/dev/gaap/src/pyramid.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/ignatiusvanniekerk/dev/gaap/src/environment.js.map

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = ".center-text{\n  text-align: center;\n}\n"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<button (click)=\"changeQuestion(1)\">Question 1</button>\n<button (click)=\"changeQuestion(2)\">Question 2</button>\n<button (click)=\"changeQuestion(3)\">Question 3</button>\n<app-pyramid *ngIf=\"toDisplay === 1\"></app-pyramid>\n<app-array-schema-colours *ngIf=\"toDisplay === 2\"></app-array-schema-colours>\n<app-data-changer *ngIf=\"toDisplay === 3\" ></app-data-changer>\n"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>Question two:</div>\n  Given an array of data where each object has the schema of\n  <div>type: string, value: number, enabled: Boolean</div>\n  Write a function that takes the data as parameter, calculates and returns a summary value based on\n  the following rules:\n  <ol>\n    <li>If type is Red and enabled add the value</li>\n    <li>If type is Red and not enabled multiply by 0</li>\n    <li>If type is Blue and enabled subtract the value</li>\n    <li>If type is Blue and not enabled multiply by 0</li>\n    <li>If type is Green and enabled multiply the value</li>\n    <li>If type is Green and not enabled multiply by 0</li>\n    <li>If type is None of the Above add 0</li>\n  </ol>\n</div>\n\n<div *ngIf=\"!calculateArray\">\n  <button (click)=\"useMockData()\">Use mock data</button>\n</div>\n\n<div *ngFor=\"let array of calculateArray\" >\n  {{array | json}}\n</div>\n<div *ngIf=\"calculateArray\">\n  <button (click)=\"calculateSum()\">Calculate sum of  data</button>\n</div>\n<div>\n  Total : {{totalValue}}\n</div>\n"

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>Question three:</div>\n  Write a function that takes exactly 2 parameters, rowData and changedValue.\n  the function should return rowData with recalculated values, based on the changedValue\n  object.\n  rowData schema:\n  <div>id: number, name: string, taxPercentage: number, qty: number, unitCostExcluding: number,\n    lineTotalExcluding: number, lineTotalTax: number, lineTotalIncluding: number</div>\n  changedValue schema would be any of the fields above excluding id, name, taxPercentage and lineTotalTax\n  with the new changed number: i.e: <div>qty: 5</div>\n</div>\n\n\n  <table>\n    <tr>\n      <th>Row</th>\n      <th>ID</th>\n      <th>NAME</th>\n      <th>Tax Percentage</th>\n      <th>QTY</th>\n      <th>Unit Cost Excluding</th>\n      <th>Line Total Excluding</th>\n      <th>Line Total Tax</th>\n      <th>Line Total Including</th>\n    </tr>\n    <tr *ngFor=\"let data of mockData; let indexNumber = index\" [attr.data-index]=\"indexNumber\">\n      <td>{{indexNumber}}</td>\n      <td>{{data.id}}</td>\n      <td>{{data.name}}</td>\n      <td>{{data.taxPercentage}}</td>\n      <td>{{data.qty}}</td>\n      <td>{{data.unitCostExcluding}}</td>\n      <td>{{data.lineTotalExcluding}}</td>\n      <td>{{data.lineTotalTax}}</td>\n      <td>{{data.lineTotalIncluding}}</td>\n    </tr>\n  </table>\n<select [(ngModel)]=\"changeObj.selectedField\">\n  <option *ngFor=\"let data of allowedToChange\" [value]=\"data\" [selected]=\"data == changeObj?.selectedField\">{{data}}</option>\n</select>\n<input [(ngModel)]=\"rowNumber\"  placeholder=\"Row number\" type=\"number\" required>\n<input [(ngModel)]=\"changeObj.itemValue\"  placeholder=\"Value to change\" type=\"number\" required>\n<button *ngIf=\"changeObj.itemValue >= 0 && rowNumber <= mockData.length && changeObj.selectedField\" (click)=\"changeValues(rowNumber, changeObj)\">Submit changes</button>\n"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>Question one:</div>\n  Given a pyramid of odd numbers starting with 1 at the top, write a function that takes any\n    row number and returns the sum of that row.\n</div>\n\n<div *ngIf=\"!pyramidOddArray\">\n  Please input row amount.\n  <input [(ngModel)]=\"pyramidRowNumber\" #ctrl=\"ngModel\" placeholder=\"Number of rows\" type=\"number\" required>\n\n  <button (click)=\"createPyramidArray()\">generate number</button>\n\n</div>\n<div *ngIf=\"pyramidOddArray\">\n  <div *ngFor=\"let oddArray of pyramidOddArray\" class=\"center-text\">\n    {{ oddArray }}\n  </div>\n\n  <input [(ngModel)]=\"rowNumber\" #ctrl=\"ngModel\" placeholder=\"row number to calculate\" type=\"number\" required>\n\n  <button (click)=\"sumOfRow(rowNumber)\">calculate row</button>\n</div>\n<div *ngIf=\"sumTotal\">\n  Sum total\n  {{sumTotal}}\n</div>\n\n"

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(349);


/***/ })

},[640]);
//# sourceMappingURL=main.bundle.map
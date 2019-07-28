(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./features/contacts/contacts.module": [
		"./src/app/features/contacts/contacts.module.ts",
		"features-contacts-contacts-module~features-home-home-module~features-projects-projects-module~featur~1ad6d6cb",
		"features-contacts-contacts-module"
	],
	"./features/home/home.module": [
		"./src/app/features/home/home.module.ts",
		"features-contacts-contacts-module~features-home-home-module~features-projects-projects-module~featur~1ad6d6cb",
		"features-home-home-module"
	],
	"./features/projects/projects.module": [
		"./src/app/features/projects/projects.module.ts",
		"features-contacts-contacts-module~features-home-home-module~features-projects-projects-module~featur~1ad6d6cb",
		"features-projects-projects-module~features-tasks-tasks-module",
		"features-projects-projects-module"
	],
	"./features/tasks/tasks.module": [
		"./src/app/features/tasks/tasks.module.ts",
		"features-contacts-contacts-module~features-home-home-module~features-projects-projects-module~featur~1ad6d6cb",
		"features-projects-projects-module~features-tasks-tasks-module",
		"features-tasks-tasks-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [
    {
        path: '',
        loadChildren: './features/home/home.module#HomeModule'
    }, {
        path: 'Home',
        loadChildren: './features/home/home.module#HomeModule'
    },
    {
        path: 'Contacts',
        loadChildren: './features/contacts/contacts.module#ContactsModule'
    },
    {
        path: 'Projects',
        loadChildren: './features/projects/projects.module#ProjectsModule'
    },
    {
        path: 'Task',
        loadChildren: './features/tasks/tasks.module#TasksModule'
    }
    // // 1st Route
    // { path: '', loadChildren: './features/home/home.module#HomeModule' },
    // { path: 'Home', loadChildren: './features/home/home.module#HomeModule' },
    // // 1st Route
    // { path: '/contacts', loadChildren: './features/contacts/contacts.module#ContactsModule' }
    // // 2nd Route
    // , { path: '**', loadChildren: "./features/page-not-found/page-not-found.module#PageNotFoundModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: true,
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-layout [title]=\"title\" [menu]=\"menu\"></app-main-layout>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular Project Manager Application';
        this.menu = [
            // { name: 'Home', url: '' },
            // { name: 'Contacts', url: 'Contacts' },
            // { name: 'Settings', url: '' },
            { name: 'About me', url: '' }
        ];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, TRANSLATE, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSLATE", function() { return TRANSLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_custom_mat_paginator_int__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/custom-mat-paginator-int */ "./src/app/core/custom-mat-paginator-int.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// AoT requires an exported function for factories
// export function HttpLoaderFactory(httpClient: HttpClient) {
//     return new TranslateHttpLoader(httpClient);
// }
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
function TRANSLATE(str) {
    return str;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            providers: [
                // {
                //     provide: MatPaginatorIntl, useFactory: (translate) => {
                //         const service = new PaginatorIntlService();
                //         service.injectTranslateService(translate);
                //         return service;
                //     }, deps: [TranslateService]
                // }
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorIntl"],
                    useClass: _core_custom_mat_paginator_int__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorI18nService"]
                }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _database_in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./database/in-memory-data.service */ "./src/app/core/database/in-memory-data.service.ts");
/* harmony import */ var _logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger/logger.service */ "./src/app/core/logger/logger.service.ts");
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "./src/app/core/main-layout/main-layout.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./toast/toast.service */ "./src/app/core/toast/toast.service.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/core/toolbar/toolbar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};















var CoreModule = /** @class */ (function () {
    /* make sure CoreModule is imported only by one NgModule the AppModule */
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_11__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                _env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production ? [] :
                    angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_database_in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__["InMemoryDataService"], {
                        dataEncapsulation: false, passThruUnknownUrl: true
                    }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [
                _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__["MainLayoutComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"]
            ],
            exports: [
                _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__["MainLayoutComponent"]
            ],
            providers: [
                _logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["Logger"],
                _toast_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/custom-mat-paginator-int.ts":
/*!**************************************************!*\
  !*** ./src/app/core/custom-mat-paginator-int.ts ***!
  \**************************************************/
/*! exports provided: MatPaginatorI18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorI18nService", function() { return MatPaginatorI18nService; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatPaginatorI18nService = /** @class */ (function (_super) {
    __extends(MatPaginatorI18nService, _super);
    function MatPaginatorI18nService(translate) {
        var _this = _super.call(this) || this;
        _this.translate = translate;
        _this.translate.onLangChange.subscribe(function (e) {
            _this.getAndInitTranslations();
        });
        _this.getAndInitTranslations();
        return _this;
    }
    // public getRangeLabel = (page: number, pageSize: number, length: number): string => {
    //     if (length === 0 || pageSize === 0) {
    //         return '0 / ${length}';
    //     }
    //     length = Math.max(length, 0);
    //     const startIndex: number = page * pageSize;
    //     const endIndex: number = startIndex < length
    //         ? Math.min(startIndex + pageSize, length)
    //         : startIndex + pageSize;
    //     return '${startIndex + 1} - ${endIndex} / ${length}';
    // };
    MatPaginatorI18nService.prototype.getAndInitTranslations = function () {
        var _this = this;
        this.translate.get([
            'PAGINATOR.ITEMS_PER_PAGE',
            'PAGINATOR.NEXT_PAGE',
            'PAGINATOR.PREV_PAGE',
            'PAGINATOR.FIRST_PAGE',
            'PAGINATOR.LAST_PAGE'
        ])
            .subscribe(function (translation) {
            _this.itemsPerPageLabel = translation['PAGINATOR.ITEMS_PER_PAGE'];
            _this.nextPageLabel = translation['PAGINATOR.NEXT_PAGE'];
            _this.previousPageLabel = translation['PAGINATOR.PREV_PAGE'];
            _this.firstPageLabel = translation['PAGINATOR.FIRST_PAGE'];
            _this.lastPageLabel = translation['PAGINATOR.LAST_PAGE'];
            _this.changes.next();
        });
    };
    MatPaginatorI18nService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], MatPaginatorI18nService);
    return MatPaginatorI18nService;
}(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"]));



/***/ }),

/***/ "./src/app/core/database/in-memory-data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/database/in-memory-data.service.ts ***!
  \*********************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    // Create a "database" with a set of collection named "contacts"
    InMemoryDataService.prototype.createDb = function () {
        var Projects = [
            {
                id: 1,
                projectName: 'TEST FIRST',
                startDate: new Date("2018-03-16"),
                endDate: new Date("2019-10-16"),
                isSetDate: true,
                priority: '3',
                contactId: 1,
                projectManager: ''
            },
            {
                id: 2,
                projectName: 'TEST Second',
                startDate: new Date("2018-10-1"),
                endDate: new Date("2019-12-16"),
                isSetDate: true,
                priority: '5',
                contactId: 5,
                projectManager: ''
            }
        ];
        var Contacts = [
            {
                id: 1,
                firstName: 'Quinn',
                lastName: 'Nixon',
                email: 'qnixon@gmail.com',
                work: 'design',
                street: '1760 Hillhurst Ave',
                city: 'Los Angeles',
                state: 'CA',
                zip: '90027'
            },
            {
                id: 2,
                firstName: 'Eric',
                lastName: 'Smith',
                email: 'esmith@gmail.com',
                work: 'code',
                street: '1910 Pacific Ave',
                city: 'Dallas',
                state: 'TX',
                zip: '75201'
            },
            {
                id: 3,
                firstName: 'Carlson',
                lastName: 'Cox',
                email: 'ccox@gmail.com',
                work: 'deploy',
                street: '12345 Beltline Rd',
                city: 'Dallas',
                state: 'TX',
                zip: '75080'
            },
            {
                id: 4,
                firstName: 'Kelsea',
                lastName: 'Kelly',
                email: 'kkelly@gmail.com',
                work: 'design',
                street: '33915 Coal Heritage Rd',
                city: 'Northfork',
                state: 'WV',
                zip: '24868'
            },
            {
                id: 5,
                firstName: 'Aino',
                lastName: 'Uno',
                email: 'auno@gmail.com',
                work: 'code',
                street: '185 N High St',
                city: 'Columbus',
                state: 'OH',
                zip: '43215'
            },
            {
                id: 6,
                firstName: 'Amy',
                lastName: 'Little',
                email: 'alittle@gmail.com',
                work: 'deploy',
                street: '3601 Dallas Pkwy',
                city: 'Plano',
                state: 'TX',
                zip: '75093'
            },
            {
                id: 7,
                firstName: 'Doris',
                lastName: 'Chandler',
                email: 'dchandler@gmail.com',
                work: 'design',
                street: '1660 India St',
                city: 'San Diego',
                state: 'CA',
                zip: '92110'
            },
            {
                id: 8,
                firstName: 'Brielle',
                lastName: 'Davidson',
                email: 'bdavidson@gmail.com',
                work: 'code',
                street: '5640 Kearny Mesa Rd Ste H',
                city: 'San Diego',
                state: 'CA',
                zip: '92110'
            },
            {
                id: 9,
                firstName: 'Vivian',
                lastName: 'Hurst',
                email: 'vhurst@gmail.com',
                work: 'deploy',
                street: '3960 W Point Loma Blvd',
                city: 'San Diego',
                state: 'CA',
                zip: '92110'
            },
            {
                id: 10,
                firstName: 'Haley',
                lastName: 'Frost',
                email: 'hforst@gmail.com',
                work: 'design',
                street: '1443 W Fullerton Ave',
                city: 'Chicago',
                state: 'IL',
                zip: '60614'
            },
            {
                id: 11,
                firstName: 'Fiona',
                lastName: 'Gaines',
                email: 'fgaines@gmail.com',
                work: 'code',
                street: '1443 W Fullerton Ave',
                city: 'Chicago',
                state: 'IL',
                zip: '60603'
            },
            {
                id: 12,
                firstName: 'Olivia',
                lastName: 'Flynn',
                email: 'oflynn@gmail.com',
                work: 'deploy',
                street: '1541 W Bryn Mawr Ave',
                city: 'Chicago',
                state: 'IL',
                zip: '60660'
            },
            {
                id: 13,
                firstName: 'Jennifer',
                lastName: 'Marshall',
                email: 'jmarshall@gmail.com',
                work: 'design',
                street: '509 Amsterdam Ave',
                city: 'New York',
                state: 'NY',
                zip: '10024'
            },
            {
                id: 14,
                firstName: 'Hope',
                lastName: 'Kennedy',
                email: 'hkennedy@gmail.com',
                work: 'code',
                street: '524 Court St',
                city: 'Brooklyn',
                state: 'NY',
                zip: '11231'
            },
            {
                id: 15,
                firstName: 'Sandra',
                lastName: 'Fitzpatrick',
                email: 'sfitzpatrick@gmail.com',
                work: 'deploy',
                street: '565 Gorge Rd',
                city: 'cliffside Park',
                state: 'NJ',
                zip: '07010'
            },
            {
                id: 16,
                firstName: 'Ashton',
                lastName: 'Silva',
                email: 'asilva@gmail.com',
                work: 'design',
                street: '4529 Sand Point Way NE',
                city: 'Seattle',
                state: 'WA',
                zip: '98105'
            },
            {
                id: 17,
                firstName: 'Peter',
                lastName: 'Byrd',
                email: 'pbyrd@gmail.com',
                work: 'deploy',
                street: '710 8th Ave S',
                city: 'Seattle',
                state: 'WA',
                zip: '98104'
            }
        ];
        var Tasks = [
            {
                id: 1,
                projectId: 1,
                projectName: 'Abc',
                taskName: 'Quinn',
                priority: "1",
                isParent: true,
                parentTaskId: null,
                startDate: new Date("2018-10-1"),
                endDate: new Date("2019-12-16"),
                contactId: 3,
                contactName: 'test',
                status: 0
            },
            {
                id: 2,
                projectId: 1,
                projectName: 'A2bc',
                taskName: 'Qui2nn',
                priority: "1",
                isParent: false,
                parentTaskId: 2,
                startDate: new Date("2018-10-1"),
                endDate: new Date("2019-12-16"),
                contactId: 3,
                contactName: 'test',
                status: 0
            },
        ];
        return { Contacts: Contacts, Projects: Projects, Tasks: Tasks };
    };
    InMemoryDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            // Declare that this service should be created
            // by the root application injector
            providedIn: 'root'
        })
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/core/logger/logger.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/logger/logger.service.ts ***!
  \***********************************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (msg) {
        console.log(msg);
    };
    Logger.prototype.error = function (msg) {
        console.error(msg);
    };
    Logger = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            // Declare that this service should be created
            // by the root application injector
            providedIn: 'root'
        })
    ], Logger);
    return Logger;
}());



/***/ }),

/***/ "./src/app/core/main-layout/main-layout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/core/main-layout/main-layout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Toolbar includes logo, titles, and actions -->\n<app-toolbar [title]=\"title\" [menu]=\"menu\" (toggleSidebar)=\"toggleSidenav()\"></app-toolbar>\n<!-- End Toolbar -->\n\n<mat-sidenav-container fullscreen>\n\n    <!-- Collapsible side content -->\n    <mat-sidenav #sidenav [mode]=\"'over'\" class=\"navbar\">\n        <app-navbar [menu]=\"menu\"></app-navbar>\n    </mat-sidenav>\n    <!-- End Collapsible side content -->\n\n    <!-- Main Content Area -->\n    <div class=\"main-content\">\n        <div class=\"mat-app-background\">\n\n\n\n            <!-- Routed view  -->\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <!-- End Main Content Area -->\n\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/core/main-layout/main-layout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/core/main-layout/main-layout.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n.main-content {\n  padding-top: 0;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 0;\n  height: 100%;\n  overflow: auto; }\n@media (min-width: 768px) {\n    .main-content {\n      padding-left: 15px;\n      padding-right: 15px; } }\n.navbar {\n  min-width: 160px;\n  max-width: 160px; }\n:host /deep/ .mat-sidenav-container[fullscreen] {\n  top: 55px; }\n@media (min-width: 768px) {\n    :host /deep/ .mat-sidenav-container[fullscreen] {\n      top: 64px; } }\n:host /deep/ .mat-sidenav-content {\n  -webkit-transform: none !important;\n          transform: none !important; }\n@media (min-width: 768px) {\n  .main-content /deep/ .outlet,\n  .main-content /deep/ .maxed-width {\n    max-width: 1024px;\n    margin-left: auto;\n    margin-right: auto; } }\n"

/***/ }),

/***/ "./src/app/core/main-layout/main-layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/main-layout/main-layout.component.ts ***!
  \***********************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.toggleSidenav = function () {
        // trigger the child component's 'toggle' method 
        this.sidenav.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MainLayoutComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MainLayoutComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"])
    ], MainLayoutComponent.prototype, "sidenav", void 0);
    MainLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-layout',
            template: __webpack_require__(/*! ./main-layout.component.html */ "./src/app/core/main-layout/main-layout.component.html"),
            styles: [__webpack_require__(/*! ./main-layout.component.scss */ "./src/app/core/main-layout/main-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/navbar/navbar.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-list class=\"sidenav-menu\">\n    <mat-list-item *ngFor=\"let menu_item of menu; let i = index\">\n        <a class=\"sidenav-menu-item-static\" mat-button [href]=\"[menu_item.url]\" target=\"_blank\" rel=\"noopener\">\n            <span>{{ menu_item.name }}</span>\n        </a>\n    </mat-list-item>\n</mat-list> -->"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NavbarComponent.prototype, "menu", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/core/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/core/navbar/navbar.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/core/toast/toast.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/toast/toast.service.ts ***!
  \*********************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(snackBar) {
        this.snackBar = snackBar;
    }
    ToastService.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    };
    ToastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"header-toolbar mat-elevation-z6\">\n    <button class=\"sidenav-toggle\" aria-label=\"Toggle Sidebar\" (click)=\"toggleSidenav()\">\n        <mat-icon class=\"menu-icon\" aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n    <div class=\"all-menu\">\n        <a [routerLink]=\"''\">\n            <img alt=\"angular\" class=\"docs-angular-logo\" src=\"../../../assets/img/angular-white-transparent.svg\">\n            <span class=\"app-title\">Angular Project Management - By Dipesh Parekh</span>\n        </a>\n    </div>\n\n    <div class=\"desktop-menu\">\n        <span class=\"spacer\"></span>\n        <a rel=\"noopener\" mat-button class=\"menu-item\" [routerLink]=\"['/Home']\">Home</a>\n        <a rel=\"noopener\" mat-button class=\"menu-item\" [routerLink]=\"['/Contacts']\">Contacts</a>\n        <a rel=\"noopener\" mat-button class=\"menu-item\" [routerLink]=\"['/Projects']\">Projects</a>\n        <a rel=\"noopener\" mat-button class=\"menu-item\" [routerLink]=\"['/Task']\">Task</a>\n\n        <a *ngFor=\"let menu_item of menu; let i = index\" [href]=\"[menu_item.url]\" rel=\"noopener\" mat-button\n            class=\"menu-item\">{{ menu_item.name }}</a>\n\n        <!-- <button #btnEnglish mat-icon-button color=\"\" (click)=\"switchLanguage('en')\" aria-label=\"English\">\n            <mat-icon>language</mat-icon>EN\n        </button><span class=\"mg10\"></span>\n\n        <button #btnFrench mat-icon-button color=\"\" (click)=\"switchLanguage('fr')\" aria-label=\"French\">\n            <mat-icon>language</mat-icon>FR\n        </button> -->\n        <div class=\"menu-item\">\n            English<mat-slide-toggle [(ngModel)]=\"isFrench\" (change)=\"changed()\"><span class=\"menu-item\">French</span>\n            </mat-slide-toggle>\n        </div>\n\n\n\n\n        <!-- <span>\n            <button mat-icon-button #menuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n            </button>\n\n            <mat-menu #menu=\"matMenu\">\n                <ul>\n                    <li>\n                        EN\n                    </li>\n                    <li>\n                        FR\n                    </li>\n                </ul>\n\n            </mat-menu>\n\n        </span> -->\n    </div>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n:host {\n  z-index: 1;\n  position: fixed;\n  top: 0;\n  width: 100%; }\n.app-title {\n  font-size: 13px; }\n@media (min-width: 768px) {\n    .app-title {\n      display: none; } }\n@media (min-width: 768px) {\n  .sidenav-toggle {\n    display: none; } }\n.all-menu .app-title {\n  display: inline-block;\n  color: #fff; }\n.desktop-menu {\n  display: none; }\n@media (min-width: 768px) {\n    .desktop-menu {\n      display: flex;\n      width: 100%; } }\n.github-logo img {\n  margin-right: 10px; }\n.mg10 {\n  padding: 10px; }\n.sidenav-toggle {\n  cursor: pointer;\n  margin-right: 10px;\n  color: #fff; }\n.sidenav-toggle:focus, .sidenav-toggle:hover, .sidenav-toggle:active {\n    outline: none; }\n.menu-item {\n  text-transform: uppercase;\n  font-size: 13px; }\n.spacer {\n  flex: 1 1 auto; }\n.header-toolbar {\n  background-color: #3f51b5;\n  color: #fff;\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46); }\n.docs-angular-logo {\n  height: 26px;\n  margin: 0 4px 3px 0;\n  vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.ts ***!
  \***************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(translate) {
        this.translate = translate;
        // Raise the event to the parent 'MainLayoutComponent'
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sidebarOpened = false;
        this.isFrench = false;
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.switchLanguage = function (language) {
        console.log(language);
        this.translate.use(language);
    };
    ToolbarComponent.prototype.changed = function () {
        console.log(this.isFrench);
        // this.isFrench = !this.isFrench;
        if (this.isFrench)
            this.switchLanguage('fr');
        else
            this.switchLanguage('en');
    };
    ToolbarComponent.prototype.ngAfterViewInit = function () {
        this.isFrench = false;
    };
    /**
     * Toggle the sidenav menu.
     */
    ToolbarComponent.prototype.toggleSidenav = function () {
        this.sidebarOpened = !this.sidebarOpened;
        this.toggleSidebar.emit(this.sidebarOpened);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ToolbarComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToolbarComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "toggleSidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btnEnglish'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ToolbarComponent.prototype, "btnEng", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btnFrench'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ToolbarComponent.prototype, "btnFrn", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/core/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/core/toolbar/toolbar.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"]
            ],
            declarations: [],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/*   api local
export const environment = {
    production: false
    , restApi: 'api/'
    //, restApi: 'http://localhost:50876/v1/'
};

*/
/***API server */
var environment = {
    production: true,
    restApi: 'http://localhost:50876/v1/',
    token: 'DIPESH_PAREKH'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dipesh\Desktop\Code\angular-project-management\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
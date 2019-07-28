(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-projects-projects-module~features-tasks-tasks-module"],{

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: MainLayoutComponent, Logger, ToastService, SharedFunctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "./src/app/core/main-layout/main-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__["MainLayoutComponent"]; });

/* harmony import */ var _logger_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger/logger.service */ "./src/app/core/logger/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _logger_logger_service__WEBPACK_IMPORTED_MODULE_1__["Logger"]; });

/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast/toast.service */ "./src/app/core/toast/toast.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return _toast_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]; });

/* harmony import */ var _shared_function_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-function.service */ "./src/app/core/shared-function.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedFunctionService", function() { return _shared_function_service__WEBPACK_IMPORTED_MODULE_3__["SharedFunctionService"]; });







/***/ }),

/***/ "./src/app/core/shared-function.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/shared-function.service.ts ***!
  \*************************************************/
/*! exports provided: SharedFunctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedFunctionService", function() { return SharedFunctionService; });
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


var SharedFunctionService = /** @class */ (function () {
    function SharedFunctionService(translate) {
        this.translate = translate;
    }
    SharedFunctionService.prototype.getTranslationData = function (myKey) {
        // let translation = "";
        // let cTranslation = this.translate.get(myKey).subscribe(res => {
        //   translation = res;
        //   return translation;
        // });
        // this.translate.get('HOME.HELLO3', { value: 'world' }).subscribe((res: string) => {
        //   console.log(res);
        //   //=> 'hello world'
        // });
        return this.translate.get(myKey);
    };
    SharedFunctionService.prototype.getTranslatData = function (myKey, data) {
        var tanslat = '';
        return this.translate.get(myKey, data);
        //   console.log(res);
    };
    SharedFunctionService.prototype.getTranslation = function (myKey) {
        var data = '';
        this.getTranslationData(myKey).subscribe(function (res) { return data = res; });
        return data;
    };
    SharedFunctionService.prototype.getTranslationWithData = function (myKey, data) {
        var val = '';
        this.getTranslatData(myKey, data).subscribe(function (res) { return val = res; });
        return val;
    };
    SharedFunctionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], SharedFunctionService);
    return SharedFunctionService;
}());



/***/ }),

/***/ "./src/app/features/contacts/shared/contact.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/contacts/shared/contact.service.ts ***!
  \*************************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_models_managerModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/models/managerModel */ "./src/app/shared/models/managerModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { environment } from '../../../../environments/environment';
//import { Logger } from '../../../core/logger/logger.service';





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'TOKEN': _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].token })
};
var ContactService = /** @class */ (function () {
    function ContactService(http, logger, sharedService, toastService) {
        this.http = http;
        this.logger = logger;
        this.sharedService = sharedService;
        this.toastService = toastService;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].restApi;
        this.contactsUrl = this.baseUrl + "Contacts";
        //   console.log('ggg')
        //   console.log(this.sharedService.getTranslationWithData('HOME.HELLO3', { value: 'world' }));
        //   console.log(this.sharedService.getTranslation('HOME.HELLO'));
        //   this.logger.log('---environment---' + environment.production)
    }
    /**
     * GET: get all contacts from the database
     */
    ContactService.prototype.getContacts = function () {
        var _this = this;
        var UrlAction = this.contactsUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.contactsUrl + "/All";
        this.logger.log(UrlAction);
        return this.http
            .get(UrlAction, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.notify(_this.sharedService.getTranslation('CONTACT.GETCONTACTMSG'), 'GET'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getContacts', 'GET')));
    };
    ContactService.prototype.getProjectManager = function () {
        var UrlAction = this.contactsUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.contactsUrl + "/All";
        return this.http.get(UrlAction, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.map(function (item) {
            var model = new _shared_models_managerModel__WEBPACK_IMPORTED_MODULE_5__["managerModel"]();
            model.fullName = item.firstName + ' ' + item.lastName;
            model.id = item.id;
            return model;
        }); }));
    };
    /**
     * GET: get an existing contact from the database by an id
     */
    ContactService.prototype.getContact = function (id) {
        var _this = this;
        var UrlAction = this.contactsUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.contactsUrl + "/Contact";
        // const url = `${this.contactsUrl}/${id}`;
        var url = UrlAction + "/" + id;
        return this.http
            .get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.notify(_this.sharedService.getTranslationWithData('CONTACT.FEATCHCONTACTBYID', { id: id }), 'GET'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getContact id=" + id, 'GET')));
    };
    /**
     * POST: add a new contact to the database
     */
    ContactService.prototype.addContact = function (contact) {
        var _this = this;
        var UrlAction = this.contactsUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.contactsUrl + "/Create";
        return this.http
            .post(UrlAction, contact, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (contact) { return _this.notify(_this.sharedService.getTranslationWithData('CONTACT.ADD_CONTACT_MSG', { value: contact.id }), 'POST'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addContact', 'POST')));
    };
    /**
     * PUT: update an existing contact to the database
     */
    ContactService.prototype.updateContact = function (contact) {
        var _this = this;
        var id = typeof contact === 'number' ? contact : contact.id;
        var UrlAction = this.contactsUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            UrlAction = UrlAction = this.contactsUrl + "/Update";
            UrlAction = UrlAction + "/" + id;
        }
        return this.http
            .put(UrlAction, contact, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.notify(_this.sharedService.getTranslationWithData('CONTACT.UPDATE_CONTACT_MSG', { value: id }), 'PUT'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateContact', 'PUT')));
    };
    /**
     * DELETE: delete an existing hero from the database
     */
    ContactService.prototype.deleteContact = function (contact) {
        var _this = this;
        var id = typeof contact === 'number' ? contact : contact.id;
        var UrlAction = this.contactsUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.contactsUrl + "/Remove";
        var url = UrlAction + "/" + id;
        return this.http
            .delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.notify(_this.sharedService.getTranslationWithData('CONTACT.DELTE_CONTACT_MSG', { value: id }), 'DELETE'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteContact', 'DELETE')));
    };
    /**
     * Prepare an error handler for failed HTTP requests.
     * That handler extracts the error message and logs it.
     * It also adds the message to the errors$ observable to which the caller
     * may listen and react.
     * @param operation The name/description of the operation that failed
     * @param method The HTTP method for the failed HTTP request
     */
    ContactService.prototype.handleError = function (operation, method) {
        return function errorHandler(res) {
            this.logger.error(res);
            var eMsg = res.message || '';
            var error = this.entityNamePlural + " " + operation + " Error" + (eMsg ? ': ' + eMsg : '');
            this.notify(error, method);
        }.bind(this);
    };
    ContactService.prototype.notify = function (message, method) {
        this.toastService.openSnackBar(message, method);
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["Logger"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["SharedFunctionService"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/features/projects/shared/project.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/projects/shared/project.service.ts ***!
  \*************************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_models_projectInfoModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/models/projectInfoModel */ "./src/app/shared/models/projectInfoModel.ts");
/* harmony import */ var _core_shared_function_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/shared-function.service */ "./src/app/core/shared-function.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { environment } from '../../../../environments/environment';
//import { Logger } from '../../../core/logger/logger.service';





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'TOKEN': _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].token })
};
var ProjectService = /** @class */ (function () {
    function ProjectService(http, logger, sharedService, toastService) {
        this.http = http;
        this.logger = logger;
        this.sharedService = sharedService;
        this.toastService = toastService;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].restApi;
        this.projectsUrl = this.baseUrl + "Projects";
    }
    /**
     * GET: get all Projects from the database
     */
    ProjectService.prototype.getProjects = function () {
        var _this = this;
        var UrlAction = this.projectsUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.projectsUrl + "/All";
        this.logger.log(UrlAction);
        return this.http
            .get(UrlAction, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.notify(_this.sharedService.getTranslation('PROJECT.GETPROJECTMSG'), 'GET'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(this.sharedService.getTranslation('PROJECT.GETPROJECTMSG'), 'GET')));
    };
    ProjectService.prototype.getProjectsInfo = function () {
        var UrlAction = this.projectsUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.projectsUrl + "/All";
        return this.http.get(UrlAction, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.map(function (item) {
            var model = new _shared_models_projectInfoModel__WEBPACK_IMPORTED_MODULE_5__["projectInfoModel"]();
            model.projectName = item.projectName;
            model.id = item.id;
            return model;
        }); }));
    };
    /**
     * GET: get an existing Project from the database by an id
     */
    ProjectService.prototype.getProject = function (id) {
        var _this = this;
        var UrlAction = this.projectsUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.projectsUrl + "/Project";
        // const url = `${this.projectsUrl}/${id}`;
        var url = UrlAction + "/" + id;
        return this.http
            .get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.notify(_this.sharedService.getTranslationWithData('PROJECT.FEATCHPROJECTBYID', { value: id }), 'GET'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(this.sharedService.getTranslationWithData('PROJECT.FEATCHPROJECTBYID', { value: id }), 'GET')));
    };
    /**
     * POST: add a new Project to the database
     */
    ProjectService.prototype.addProject = function (project) {
        var _this = this;
        this.logger.log(JSON.stringify(project));
        var UrlAction = this.projectsUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.projectsUrl + "/Create";
        return this.http
            .post(UrlAction, project, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (project) { return _this.notify(_this.sharedService.getTranslationWithData('PROJECT.ADDPROJECTMSG', { value: project.id }), 'POST'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addProject', 'POST')));
    };
    /**
     * PUT: update an existing Project to the database
     */
    ProjectService.prototype.updateProject = function (project) {
        var _this = this;
        this.logger.log(JSON.stringify(project));
        var id = typeof project === 'number' ? project : project.id;
        var UrlAction = this.projectsUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            UrlAction = UrlAction = this.projectsUrl + "/Update";
            UrlAction = UrlAction + "/" + id;
        }
        return this.http
            .put(UrlAction, project, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.notify(_this.sharedService.getTranslationWithData('PROJECT.ADDPROJECTMSG', { value: project.id }), 'PUT'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateProject', 'PUT')));
    };
    /**
     * DELETE: delete an existing hero from the database
     */
    ProjectService.prototype.deleteProject = function (project) {
        var _this = this;
        var id = typeof project === 'number' ? project : project.id;
        var UrlAction = this.projectsUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.projectsUrl + "/Remove";
        var url = UrlAction + "/" + id;
        return this.http
            .delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.notify(_this.sharedService.getTranslationWithData('PROJECT.DELTEPROJECTMSG', { value: id }), 'DELETE'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteProject', 'DELETE')));
    };
    /**
     * Prepare an error handler for failed HTTP requests.
     * That handler extracts the error message and logs it.
     * It also adds the message to the errors$ observable to which the caller
     * may listen and react.
     * @param operation The name/description of the operation that failed
     * @param method The HTTP method for the failed HTTP request
     */
    ProjectService.prototype.handleError = function (operation, method) {
        return function errorHandler(res) {
            this.logger.error(res);
            var eMsg = res.message || '';
            var error = this.entityNamePlural + " " + operation + " Error" + (eMsg ? ': ' + eMsg : '');
            this.notify(error, method);
        }.bind(this);
    };
    ProjectService.prototype.notify = function (message, method) {
        this.toastService.openSnackBar(message, method);
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["Logger"], _core_shared_function_service__WEBPACK_IMPORTED_MODULE_6__["SharedFunctionService"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/features/projects/shared/project.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/projects/shared/project.ts ***!
  \*****************************************************/
/*! exports provided: ProjectInfo, Manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfo", function() { return ProjectInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return Manager; });
var ProjectInfo = /** @class */ (function () {
    function ProjectInfo(projectName, id, isSetDate, priority, projectManager, startdDate, endDate) {
        this.projectName = projectName;
        this.id = id;
        this.isSetDate = isSetDate;
        this.priority = priority;
        this.projectManager = projectManager;
        this.startdDate = startdDate;
        this.endDate = endDate;
    }
    return ProjectInfo;
}());

var Manager = /** @class */ (function () {
    function Manager() {
    }
    return Manager;
}());



/***/ }),

/***/ "./src/app/shared/models/managerModel.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/managerModel.ts ***!
  \***********************************************/
/*! exports provided: managerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerModel", function() { return managerModel; });
var managerModel = /** @class */ (function () {
    function managerModel() {
    }
    return managerModel;
}());



/***/ }),

/***/ "./src/app/shared/models/projectInfoModel.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/projectInfoModel.ts ***!
  \***************************************************/
/*! exports provided: projectInfoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectInfoModel", function() { return projectInfoModel; });
var projectInfoModel = /** @class */ (function () {
    function projectInfoModel() {
    }
    return projectInfoModel;
}());



/***/ })

}]);
//# sourceMappingURL=features-projects-projects-module~features-tasks-tasks-module.js.map
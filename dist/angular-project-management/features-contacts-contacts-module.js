(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-contacts-contacts-module"],{

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

/***/ "./src/app/features/contacts/contact-detail/contact-detail.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/features/contacts/contact-detail/contact-detail.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title> {{'EDITUSER_PG.TITLE' | translate}} </h3>\n\n<mat-accordion class=\"example-headers-align\">\n\n    <!-- Personal Form inside Expansion Panel Personal -->\n    <mat-expansion-panel>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                {{'EDITUSER_PG.PERSONAL' | translate}}\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-personal-form [form]=\"form\"></app-personal-form>\n    </mat-expansion-panel>\n\n    <!-- Work Form inside Expansion Panel Work -->\n    <!-- <mat-expansion-panel>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                Work\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-work-form [form]=\"form\"></app-work-form>\n    </mat-expansion-panel> -->\n\n    <!-- Address Form inside Expansion Panel Work -->\n    <!-- <mat-expansion-panel>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                Address\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-address-form [form]=\"form\"></app-address-form>\n    </mat-expansion-panel> -->\n\n    <div class=\"top-15\" align=\"end\">\n        <button mat-raised-button (click)=\"close()\">{{'EDITUSER_PG.CLOSE' | translate}}</button>&nbsp;\n        <button class=\"btn-success\" mat-raised-button [disabled]=\"!form.valid || !form.dirty\"\n            (click)=\"save()\">{{'EDITUSER_PG.SAVE' | translate}}</button>\n    </div>\n\n</mat-accordion>"

/***/ }),

/***/ "./src/app/features/contacts/contact-detail/contact-detail.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/features/contacts/contact-detail/contact-detail.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n\n.top-15 {\n  padding-top: 15px; }\n\n.btn-success {\n  background-color: #673ab7;\n  color: #fff; }\n\n.btn-info {\n  background-color: #b0bec5;\n  color: #000000; }\n"

/***/ }),

/***/ "./src/app/features/contacts/contact-detail/contact-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/contacts/contact-detail/contact-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: ContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function() { return ContactDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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



var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent(dialogRef, contact) {
        this.dialogRef = dialogRef;
        this.contact = contact;
        this.title = 'Edit Contact';
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ContactDetailComponent.prototype.buildForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.contact.id),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.contact.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.contact.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.contact.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
        });
    };
    ContactDetailComponent.prototype.save = function () {
        if (this.form.invalid) {
            return;
        }
        this.dialogRef.close(this.form.value);
    };
    ContactDetailComponent.prototype.close = function () {
        this.dialogRef.close(null);
    };
    ContactDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-detail',
            template: __webpack_require__(/*! ./contact-detail.component.html */ "./src/app/features/contacts/contact-detail/contact-detail.component.html"),
            styles: [__webpack_require__(/*! ./contact-detail.component.scss */ "./src/app/features/contacts/contact-detail/contact-detail.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "./src/app/features/contacts/contact-list/contact-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/features/contacts/contact-list/contact-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"space-between center\" flex class=\"layout-align-space-between-center layout-row flex\">\n    <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\"\n            placeholder=\"{{'CONTACT.SEARCHCONTACTS' | translate}}\">\n    </mat-form-field>&nbsp;&nbsp;\n\n    <!-- <button class=\"btn-secondary\" mat-mini-fab matTooltip=\"Add a contact\">\n        <mat-icon (click)=\"loadAddContact();\" aria-label=\"add contact\">add</mat-icon> Add Contact\n    </button> -->\n\n\n    <button mat-raised-button color=\"accent\" (click)=\"loadAddContact();\">\n        <mat-icon aria-label=\"add contact\">contacts</mat-icon> {{'CONTACT.ADDUSER' | translate}}\n    </button>\n\n    <div [hidden]=\"hideAddContact\">\n        <app-new-contact (sentEvent)=\"receiveSuccess($event)\"></app-new-contact>\n    </div>\n\n</div>\n\n<div class=\"basic-container mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"id\" matSortDirection=\"desc\" matSortDisableClear>\n\n        <!-- Id Column -->\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>ID</th>\n            <td mat-cell *matCellDef=\"let contact\">{{ contact.id }}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"fullName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'CONTACT.NAME' | translate}}</th>\n            <td mat-cell *matCellDef=\"let contact\">{{ getFullName(contact) }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"email\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n            <td mat-cell *matCellDef=\"let contact\">{{ contact.email }}</td>\n        </ng-container>\n\n        <!-- Work Type Column -->\n        <!-- <ng-container matColumnDef=\"work\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Work Type</th>\n            <td mat-cell *matCellDef=\"let contact\">{{ contact.work }}</td>\n        </ng-container> -->\n\n        <!-- State Column -->\n        <!-- <ng-container matColumnDef=\"state\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>State</th>\n            <td mat-cell *matCellDef=\"let contact\">{{ contact.state }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"address\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Address</th>\n            <td mat-cell *matCellDef=\"let contact\">{{ getAddress(contact) }}</td>\n        </ng-container> -->\n\n        <!-- Action Column -->\n        <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\n            <td mat-cell *matCellDef=\"let contact\">\n                <button mat-icon-button color=\"accent\" matTooltip=\"{{'CONTACT.EDITCONTACT' | translate}}\">\n                    <mat-icon (click)=\"editContact(contact.id)\" aria-label=\"edit contact\">edit</mat-icon>\n                </button>\n                <button mat-icon-button color=\"warn\" matTooltip=\"{{'CONTACT.DELETECONTACT' | translate}}\">\n                    <mat-icon (click)=\"deleteContact(contact)\" aria-label=\"delete contact\">delete_forever</mat-icon>\n                </button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n    <mat-paginator [pageSizeOptions]=\"[5, 10]\" showFirstLastButtons>\n    </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/features/contacts/contact-list/contact-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/features/contacts/contact-list/contact-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  width: 50%; }\n\n.btn-secondary {\n  background-color: #ffd740;\n  color: #000000; }\n\n.button-right {\n  position: absolute;\n  right: 45px;\n  z-index: 1; }\n"

/***/ }),

/***/ "./src/app/features/contacts/contact-list/contact-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/contacts/contact-list/contact-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_shared_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/dialogs */ "./src/app/shared/dialogs/index.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact-detail/contact-detail.component */ "./src/app/features/contacts/contact-detail/contact-detail.component.ts");
/* harmony import */ var _shared_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/contact.service */ "./src/app/features/contacts/shared/contact.service.ts");
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




//import { ConfirmedDialogComponent } from '../../../shared/dialogs/confirmed-dialog/confirmed-dialog.component';
//import { Logger } from '../../../core/logger/logger.service';





var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(contactService, logger, sharedService, dialog) {
        this.contactService = contactService;
        this.logger = logger;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.hideAddContact = true;
        this.screenHeight = window.screen.height;
        this.screenWidth = window.screen.width;
        this.logger.log("Init() height: " + this.screenHeight + "; width: " + this.screenWidth);
        this.setDisplayedColumns();
    }
    ContactListComponent.prototype.loadAddContact = function () {
        this.hideAddContact = !this.hideAddContact;
    };
    ContactListComponent.prototype.onResize = function (event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        this.logger.log("Resize() height: " + this.screenHeight + "; width: " + this.screenWidth);
        this.setDisplayedColumns();
    };
    ContactListComponent.prototype.ngOnInit = function () {
        this.loadContacts();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ContactListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ContactListComponent.prototype.loadContacts = function () {
        var _this = this;
        this.contactService.getContacts().subscribe(function (data) {
            _this.dataSource.data = data;
        });
    };
    ContactListComponent.prototype.receiveSuccess = function ($event) {
        this.loadContacts();
        this.hideAddContact = true;
    };
    ContactListComponent.prototype.editContact = function (id) {
        var _this = this;
        this.contactService.getContact(id).subscribe(function (data) {
            var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.height = '300px';
            dialogConfig.width = '450px';
            dialogConfig.data = data;
            var dialogRef = _this.dialog.open(_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailComponent"], dialogConfig);
            dialogRef.afterClosed().subscribe(function (result) {
                if (!result) {
                    return;
                }
                _this.contactService.updateContact(result)
                    .subscribe(function (_) { return _this.loadContacts(); });
            });
        });
    };
    ContactListComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        // Create configuration for the dialog
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.height = '200px';
        dialogConfig.width = '400px';
        dialogConfig.data = {
            title: "Delete  " + contact.firstName + " " + contact.lastName,
            message: this.sharedService.getTranslation('CONTACT.CONFIRMTITLE')
        };
        var dialogRef = this.dialog.open(_app_shared_dialogs__WEBPACK_IMPORTED_MODULE_2__["ConfirmedDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dataSource.data = _this.dataSource.data.filter(function (e) { return e != contact; });
                _this.contactService.deleteContact(contact).subscribe();
            }
        });
    };
    ContactListComponent.prototype.getFullName = function (contact) {
        return contact.firstName + " " + contact.lastName;
    };
    // getAddress(contact: Contact): string {
    //     return `${contact.street} ${contact.city}, ${contact.state}, ${contact.zip}`;
    // }
    /**
     * Update a list of table columns to be displayed based on the width of the screen.
     */
    ContactListComponent.prototype.setDisplayedColumns = function () {
        if (this.screenWidth < 420) {
            this.displayedColumns = ['id', 'fullName', 'work', 'action'];
        }
        else if (this.screenWidth >= 420 && this.screenWidth <= 800) {
            this.displayedColumns = ['id', 'fullName', 'email', 'action'];
        }
        else {
            this.displayedColumns = ['id', 'fullName', 'email', 'action'];
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ContactListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ContactListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ContactListComponent.prototype, "onResize", null);
    ContactListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/features/contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.scss */ "./src/app/features/contacts/contact-list/contact-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["Logger"], _core_shared_function_service__WEBPACK_IMPORTED_MODULE_6__["SharedFunctionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/features/contacts/contacts-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/contacts/contacts-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ContactsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsRoutingModule", function() { return ContactsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/app/features/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-contact/new-contact.component */ "./src/app/features/contacts/new-contact/new-contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var contactsRoutes = [
    // 1st Route
    { path: '', component: _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_2__["ContactListComponent"] },
    // 2nd Route
    { path: 'add-contact', component: _new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_3__["NewContactComponent"] }
];
var ContactsRoutingModule = /** @class */ (function () {
    function ContactsRoutingModule() {
    }
    ContactsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(contactsRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ContactsRoutingModule);
    return ContactsRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/contacts/contacts.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/contacts/contacts.module.ts ***!
  \******************************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_forms_material_forms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/forms/material-forms.module */ "./src/app/shared/forms/material-forms.module.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-detail/contact-detail.component */ "./src/app/features/contacts/contact-detail/contact-detail.component.ts");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/app/features/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts-routing.module */ "./src/app/features/contacts/contacts-routing.module.ts");
/* harmony import */ var _shared_contact_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/contact.service */ "./src/app/features/contacts/shared/contact.service.ts");
/* harmony import */ var _new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-contact/new-contact.component */ "./src/app/features/contacts/new-contact/new-contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _app_shared_forms_material_forms_module__WEBPACK_IMPORTED_MODULE_1__["MaterialFormsModule"],
                _contacts_routing_module__WEBPACK_IMPORTED_MODULE_6__["ContactsRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
            ],
            declarations: [
                _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailComponent"],
                _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_5__["ContactListComponent"],
                _new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_8__["NewContactComponent"]
            ],
            providers: [
                _shared_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"]
            ],
            entryComponents: [
                _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailComponent"]
            ]
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "./src/app/features/contacts/new-contact/new-contact.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/features/contacts/new-contact/new-contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div layout=\"row\" layout-align=\"space-between center\" flex class=\"layout-align-space-between-center layout-row flex\">\n    <div class=\"top-container\">\n          <span class=\"md-lgn-headline\"></span>\n       <button class=\"btn-secondary\" mat-mini-fab matTooltip=\"contacts\">\n            <mat-icon aria-label=\"contacts\">Contacts</mat-icon>\n        </button> -->\n<!-- <h3 mat-raised-button color=\"accent\">\n            {{ title }}\n        </h3>\n\n    </div>\n</div>   -->\n<mat-toolbar color=\"primary\" layout=\"fill\">\n    {{'ADDUSERPG.ADD_USER' | translate}}\n</mat-toolbar>\n\n<div class=\"basic-container mat-elevation-z8\">\n    <mat-horizontal-stepper [linear]=\"true\" #stepper>\n\n        <!-- Personal Form for Step 1 -->\n        <mat-step [stepControl]=\"personalForm\">\n            <ng-template matStepLabel> {{'ADDUSERPG.PERSONAL' | translate}} </ng-template>\n            <app-personal-form [form]=\"personalForm\"></app-personal-form>\n            <div>\n                <button mat-raised-button matStepperNext type=\"button\" matTooltip=\"Next Step\"\n                    class=\"btn-primary\">{{'STEPPERS.NEXT' | translate}} </button>\n            </div>\n        </mat-step>\n\n        <!-- Work Form for Step 1 -->\n        <!-- <mat-step [stepControl]=\"workForm\">\n            <ng-template matStepLabel>Work</ng-template>\n            <app-work-form [form]=\"workForm\"></app-work-form>\n            <div class=\"top-15\">\n                <button mat-raised-button matStepperPrevious>Previous</button>&nbsp;\n                <button class=\"btn-primary\" mat-raised-button matStepperNext>Next</button>\n            </div>\n        </mat-step> -->\n\n        <!-- Address Form for Step 3 -->\n        <!-- <mat-step [stepControl]=\"addressForm\">\n            <ng-template matStepLabel>Address</ng-template>\n            <app-address-form [form]=\"addressForm\"></app-address-form>\n            <div>\n                <button mat-raised-button matStepperPrevious>Previous</button>&nbsp;\n                <button class=\"btn-primary\" mat-raised-button matStepperNext>Next</button>\n            </div>\n        </mat-step> -->\n\n        <!-- Result Form for Step 4 -->\n        <mat-step>\n            <ng-template matStepLabel>{{'ADDUSERPG.REVIEW' | translate}}</ng-template>\n            <app-result-form [formData]=\"getContact()\"></app-result-form>\n            <div class=\"top-15\">\n                <button mat-raised-button matStepperPrevious>{{'STEPPERS.PREIVIOUS' | translate}} </button>&nbsp;\n                <button class=\"btn-success\" mat-raised-button cdkFocusInitial\n                    (click)=\"save()\">{{'ADDUSERPG.SAVE' | translate}} </button>\n            </div>\n        </mat-step>\n\n    </mat-horizontal-stepper>\n</div>"

/***/ }),

/***/ "./src/app/features/contacts/new-contact/new-contact.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/features/contacts/new-contact/new-contact.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-container {\n  margin-right: 10px;\n  margin-top: 30px;\n  margin-bottom: 30px; }\n\n.md-lgn-headline {\n  font-size: 16px;\n  padding-top: 30px;\n  padding-right: 10px;\n  font-weight: 600; }\n\n.top-15 {\n  padding-top: 15px; }\n\n.btn-primary {\n  background-color: #55acee;\n  color: #fff; }\n\n.btn-secondary {\n  background-color: #ffd740;\n  color: #000000; }\n\n.btn-success {\n  background-color: #673ab7;\n  color: #fff; }\n\n.btn-info {\n  background-color: #b0bec5;\n  color: #000000; }\n"

/***/ }),

/***/ "./src/app/features/contacts/new-contact/new-contact.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/contacts/new-contact/new-contact.component.ts ***!
  \************************************************************************/
/*! exports provided: NewContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewContactComponent", function() { return NewContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/contact.service */ "./src/app/features/contacts/shared/contact.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Logger } from '../../../core/logger/logger.service';


var NewContactComponent = /** @class */ (function () {
    function NewContactComponent(formBuilder, router, contactService, logger) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.contactService = contactService;
        this.logger = logger;
        this.sentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NewContactComponent.prototype.ngOnInit = function () {
        this.buildPersonalForm();
        // this.buildWorkForm();
        //  this.buildAddressForm();
    };
    NewContactComponent.prototype.buildPersonalForm = function () {
        this.personalForm = this.formBuilder.group({
            'firstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
    };
    NewContactComponent.prototype.buildWorkForm = function () {
        this.workForm = this.formBuilder.group({
            'work': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    NewContactComponent.prototype.buildAddressForm = function () {
        this.addressForm = this.formBuilder.group({
            'street': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'city': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'state': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'zip': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    NewContactComponent.prototype.reset = function () {
        this.personalForm.reset();
        //  this.workForm.reset();
        // this.addressForm.reset();
        this.stepper.reset();
    };
    NewContactComponent.prototype.save = function () {
        var _this = this;
        if (this.invalidForms())
            return;
        var newContact = this.getContact();
        this.logger.log("New Contact: " + newContact);
        this.contactService.addContact(newContact).subscribe(function (result) {
            if (result) {
                _this.sentEvent.emit('');
                _this.reset();
                // go to Contace List page
                // this.router.navigate(['/']);
            }
        });
    };
    /**
     * Return true if at least either personForm, workForm or addressForm is invalid
     */
    NewContactComponent.prototype.invalidForms = function () {
        return (this.personalForm.invalid);
    };
    /**
     * Return Contact instance by combining the following.
     *   personalForm.value => firstName, lastName, email
     *   workForm.value => work
     *   addressForm.value => street, city, state, zip
     */
    NewContactComponent.prototype.getContact = function () {
        return __assign({}, this.personalForm.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", Object)
    ], NewContactComponent.prototype, "stepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewContactComponent.prototype, "sentEvent", void 0);
    NewContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-contact',
            template: __webpack_require__(/*! ./new-contact.component.html */ "./src/app/features/contacts/new-contact/new-contact.component.html"),
            styles: [__webpack_require__(/*! ./new-contact.component.scss */ "./src/app/features/contacts/new-contact/new-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["Logger"]])
    ], NewContactComponent);
    return NewContactComponent;
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



/***/ })

}]);
//# sourceMappingURL=features-contacts-contacts-module.js.map
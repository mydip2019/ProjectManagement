(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-projects-projects-module"],{

/***/ "./src/app/features/projects/new-project/add-project.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/features/projects/new-project/add-project.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\r\n    <mat-card class=\"z-depth center\" flex=\"90\">\r\n\r\n        <mat-toolbar color=\"primary\" layout=\"fill\">\r\n            {{ title }}\r\n        </mat-toolbar>\r\n\r\n        <div class=\"basic-container mat-elevation-z8\">\r\n            <mat-horizontal-stepper [linear]=\"true\" #stepper>\r\n\r\n                <!-- Personal Form for Step 1 -->\r\n                <mat-step [stepControl]=\"projectForm\">\r\n                    <ng-template matStepLabel> {{'ADDEDITPROJECTPG.PROJECTINFO' | translate}}</ng-template>\r\n                    <!-- <app-personal-form [form]=\"personalForm\"></app-personal-form> -->\r\n\r\n                    <form [formGroup]=\"projectForm\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"{{'ADDEDITPROJECTPG.PROJECTNAME' | translate}}\"\r\n                                formControlName=\"projectName\" required>\r\n                        </mat-form-field>\r\n\r\n                        <mat-checkbox (change)='onChange($event)' formControlName='isSetDate' color='primary'>\r\n                            {{'ADDEDITPROJECTPG.ISDATE' | translate}}</mat-checkbox>\r\n\r\n                        <mat-form-field class=\"\">\r\n                            <input formControlName=\"startDate\" [readOnly]=\"isDisabled\" matInput [matDatepicker]=\"picker\"\r\n                                [min]=\"minDate\" [max]=\"maxDate\"\r\n                                placeholder=\"{{'ADDEDITPROJECTPG.STARTDATE' | translate}}\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"isDisabled\">\r\n                            </mat-datepicker-toggle>\r\n                            <mat-datepicker [startAt]=\"minDate\" startView=\"year\" #picker></mat-datepicker>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field class=\"\">\r\n                            <input formControlName=\"endDate\" [readOnly]=\"isDisabled\" matInput [matDatepicker]=\"picker2\"\r\n                                [min]=\"endDate\" [max]=\"maxDate\"\r\n                                placeholder=\"{{'ADDEDITPROJECTPG.ENDDATE' | translate}}\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker2\" [disabled]=\"isDisabled\">\r\n                            </mat-datepicker-toggle>\r\n                            <mat-datepicker #picker2 startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n                        </mat-form-field>\r\n\r\n\r\n                        <div> {{'ADDEDITPROJECTPG.PRIORITY' | translate}}\r\n                            <mat-slider formControlName=\"priority\" (input)=\"priority = $event.value\" step=\"1\" min=\"0\"\r\n                                max=\"5\" [value]=\"priority\" thumbLabel=true>\r\n                            </mat-slider>\r\n                        </div>\r\n                        <div>\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"{{'ADDEDITPROJECTPG.PROJECTMANAGER' | translate}}\"\r\n                                    [required]=\"false\" readonly [value]=\"managerfullName\"\r\n                                    formControlName=\"projectManager\">\r\n                                <mat-icon matSuffix color=\"primary\" (click)=\"openDataDialog(true)\">search</mat-icon>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n                    </form>\r\n\r\n                    <div>\r\n                        <button mat-raised-button matStepperNext type=\"button\" matTooltip=\"Next Step\"\r\n                            class=\"btn-primary\">{{'STEPPERS.NEXT' | translate}}</button>\r\n                    </div>\r\n                </mat-step>\r\n\r\n                <!-- Result Form for Step 4 -->\r\n                <mat-step>\r\n                    <ng-template matStepLabel>{{'ADDEDITPROJECTPG.REVIEW' | translate}}</ng-template>\r\n                    <app-project-result-form [formData]=\"getProject()\"></app-project-result-form>\r\n                    <div class=\"top-15\">\r\n                        <button mat-raised-button matStepperPrevious>{{'STEPPERS.PREIVIOUS' | translate}}</button>&nbsp;\r\n                        <button class=\"btn-success\" mat-raised-button cdkFocusInitial\r\n                            (click)=\"save()\">{{'ADDEDITPROJECTPG.SAVE' | translate}}</button>\r\n                    </div>\r\n                </mat-step>\r\n\r\n            </mat-horizontal-stepper>\r\n        </div>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/features/projects/new-project/add-project.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/features/projects/new-project/add-project.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  width: 100%; }\n\n.main-div {\n  width: 80%;\n  margin: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/features/projects/new-project/add-project.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/projects/new-project/add-project.component.ts ***!
  \************************************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var _app_shared_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/dialogs */ "./src/app/shared/dialogs/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contacts_shared_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contacts/shared/contact.service */ "./src/app/features/contacts/shared/contact.service.ts");
/* harmony import */ var _shared_project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/project */ "./src/app/features/projects/shared/project.ts");
/* harmony import */ var _shared_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/project.service */ "./src/app/features/projects/shared/project.service.ts");
/* harmony import */ var _core_shared_function_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/shared-function.service */ "./src/app/core/shared-function.service.ts");
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










var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(formBuilder, router, projectService, dialog, contactService, sharedService, logger) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.projectService = projectService;
        this.dialog = dialog;
        this.contactService = contactService;
        this.sharedService = sharedService;
        this.logger = logger;
        this.minDate = new Date(2019, 5, 1);
        this.maxDate = new Date(2020, 5, 1);
        this.title = '';
        this.sentProjEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.managerfullName = '';
        this.selectedManager = new _shared_project__WEBPACK_IMPORTED_MODULE_7__["Manager"]();
        this.projectId = 0;
        this.isDisabled = true;
        this.priority = 0;
        this.project = this.createProjectStructure(this.projectId);
        this.buildProjectForm(this.project);
        this.getProjectManager();
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.projectId > 0)
            this.projectService.getProject(this.projectId).subscribe(function (data) {
                _this.project = data;
                //  this.logger.log(`New managers: ${JSON.stringify(this.managers)}`);
                if (_this.projectId > 0 && _this.project.contactId != null && _this.project.contactId > 0) {
                    _this.selectedManager = (_this.managers.filter(function (x) { return x.id == _this.project.contactId; }))[0];
                }
                _this.buildProjectForm(data);
                _this.isDisabled = !_this.project.isSetDate;
            });
        this.title = this.sharedService.getTranslationWithData('ADDEDITPROJECTPG.TITLE', { value: this.type });
        console.log(this.title);
    };
    AddProjectComponent.prototype.onChange = function ($event) {
        this.isDisabled = !this.isDisabled;
        if (this.isDisabled) {
            this.projectForm.controls['startDate'].setValue('');
            this.projectForm.controls['endDate'].setValue('');
        }
        return;
    };
    AddProjectComponent.prototype.createProjectStructure = function (id) {
        var prjInfo = new _shared_project__WEBPACK_IMPORTED_MODULE_7__["ProjectInfo"]('', id, false, '', null, null, null);
        return prjInfo;
    };
    AddProjectComponent.prototype.getProject = function () {
        return __assign({}, this.projectForm.value);
    };
    AddProjectComponent.prototype.getProjectManager = function () {
        var _this = this;
        this.contactService.getProjectManager()
            .subscribe(function (data) {
            _this.managers = (data);
        });
    };
    AddProjectComponent.prototype.invalidForms = function () {
        return (this.projectForm.invalid);
    };
    AddProjectComponent.prototype.save = function () {
        var _this = this;
        if (this.invalidForms())
            return;
        var newProject = this.getProject();
        this.logger.log("New Project: " + newProject);
        if (this.project.id > 0) {
            this.projectService.updateProject(newProject).subscribe(function (result) {
                // if (result) {
                _this.projectForm.reset();
                _this.sentProjEvent.emit('');
                //}
            });
        }
        else {
            newProject.id = undefined;
            this.projectService.addProject(newProject).subscribe(function (result) {
                //  if (result) {
                _this.projectForm.reset();
                _this.sentProjEvent.emit('');
                // this.reset();
                // go to Contace List page
                // this.router.navigate(['/']);
                // }
            });
        }
    };
    AddProjectComponent.prototype.buildProjectForm = function (project) {
        this.project = project;
        this.projectForm = this.formBuilder.group({
            'id': [this.project.id],
            'projectName': [this.project.projectName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'isSetDate': [this.project.isSetDate],
            'startDate': [this.project.startDate],
            'endDate': [this.project.endDate],
            'priority': [this.project.priority],
            'projectManager': [this.selectedManager.fullName],
            'contactId': [this.selectedManager.id]
        });
        //this.projectForm.setValidators(this.comparisonValidator())
    };
    //Open Dialog box and pass parameter 
    AddProjectComponent.prototype.openDataDialog = function (isAdd) {
        var _this = this;
        if (isAdd) {
            //this.selectedManager = null;
        }
        this.projectManagerDataDialog = this.dialog.open(_app_shared_dialogs__WEBPACK_IMPORTED_MODULE_0__["DataDialogComponent"], {
            data: { fillData: this.managers, selectedOne: this.selectedManager }, disableClose: true, width: '400px', height: '500px'
        });
        this.projectManagerDataDialog.afterClosed().pipe()
            .subscribe(function (result) {
            _this.retSelectedManager = result;
            if (Object.keys(result).length > 0 && _this.retSelectedManager !== null && _this.retSelectedManager !== undefined) {
                _this.selectedManager = _this.retSelectedManager;
                _this.managerfullName = _this.retSelectedManager.fullName; // assing first from array 
                _this.projectForm.controls['contactId'].setValue(_this.selectedManager.id);
                _this.projectForm.controls['projectManager'].setValue(_this.selectedManager.fullName);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"])
    ], AddProjectComponent.prototype, "projectForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('stepper'),
        __metadata("design:type", Object)
    ], AddProjectComponent.prototype, "stepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String)
    ], AddProjectComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], AddProjectComponent.prototype, "sentProjEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Number)
    ], AddProjectComponent.prototype, "projectId", void 0);
    AddProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "alert",
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/features/projects/new-project/add-project.component.html"),
            styles: [__webpack_require__(/*! ./add-project.component.scss */ "./src/app/features/projects/new-project/add-project.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _shared_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _contacts_shared_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"],
            _core_shared_function_service__WEBPACK_IMPORTED_MODULE_9__["SharedFunctionService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["Logger"]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/features/projects/projects-list/projects-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/features/projects/projects-list/projects-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"space-between center\" flex class=\"layout-align-space-between-center layout-row flex\">\n    <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\"\n            placeholder=\"{{'PROJECT.SEARCHPROJECTS' | translate}}\">\n    </mat-form-field>&nbsp;&nbsp;\n\n    <button mat-raised-button color=\"accent\" (click)=\"createComponent('Add',0)\">\n        <mat-icon aria-label=\"add project\">work</mat-icon> {{'PROJECT.ADDPROJECT' | translate}}\n    </button>\n\n\n</div>\n\n<div class=\"basic-container mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"id\" matSortDirection=\"desc\" matSortDisableClear>\n        <!-- Id Column -->\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>ID</th>\n            <td mat-cell *matCellDef=\"let project\">{{ project.id }}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"projectName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'PROJECT.PROJECTNAME' | translate}}</th>\n            <td mat-cell *matCellDef=\"let project\">{{ project.projectName }}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"projectManager\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'PROJECT.PROJECTMANAGER' | translate}} </th>\n            <td mat-cell *matCellDef=\"let project\">{{ project.projectManager }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"startDate\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'PROJECT.STARTDATE' | translate}}</th>\n            <td mat-cell *matCellDef=\"let project\">{{ project.startDate   | formatDateText: 28: 'MM-dd-yyyy'}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"endDate\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'PROJECT.ENDDATE' | translate}}</th>\n            <td mat-cell *matCellDef=\"let project\">{{ project.endDate | formatDateText: 28: 'MM-dd-yyyy' }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"priority\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'PROJECT.PRIORITY' | translate}} </th>\n            <td mat-cell *matCellDef=\"let project\">{{ project.priority }}</td>\n        </ng-container>\n        <!-- Action Column -->\n        <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\n            <td mat-cell *matCellDef=\"let project\">\n                <button mat-icon-button color=\"accent\" matTooltip=\"{{'PROJECT.EDITPROJECT' | translate}}\">\n                    <mat-icon (click)=\"editProject(project.id)\" aria-label=\"edit project\">edit</mat-icon>\n                </button>\n                <button mat-icon-button color=\"warn\" matTooltip=\"{{'PROJECT.DELETEPROJECT' | translate}}\">\n                    <mat-icon (click)=\"deleteProject(project)\" aria-label=\"delete project\">delete_forever</mat-icon>\n                </button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n    <mat-paginator [pageSizeOptions]=\"[5, 10]\" showFirstLastButtons></mat-paginator>\n\n    <!-- <button (click)=\"createComponent('success')\">Create success alert</button>\n    <button (click)=\"createComponent('danger')\">Create danger alert</button> -->\n\n\n\n</div>\n\n<br />\n\n\n<div layout=\"row\" [hidden]=\"hideAddProject\" layout-align=\"space-between center\" flex\n    class=\"layout-align-space-between-center layout-row flex\">\n    <button mat-mini-fab color=\"accent\" (click)=\"closeClick()\" class=\"button-right\">\n        <mat-icon class=\"mat-24\">close</mat-icon>\n    </button>\n    <div class=\"basic-container mat-elevation-z8\">\n        <mat-card class=\"z-depth center\" flex=\"90\">\n            <template #projectContainer (sentProjEvent)=\"receiveProjSuccess($event)\"></template>\n\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/features/projects/projects-list/projects-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/features/projects/projects-list/projects-list.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  width: 50%; }\n\n.btn-secondary {\n  background-color: #ffd740;\n  color: #000000; }\n\n.button-right {\n  position: absolute;\n  right: 45px;\n  z-index: 1; }\n"

/***/ }),

/***/ "./src/app/features/projects/projects-list/projects-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/projects/projects-list/projects-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function() { return ProjectsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_shared_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/dialogs */ "./src/app/shared/dialogs/index.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/project.service */ "./src/app/features/projects/shared/project.service.ts");
/* harmony import */ var _new_project_add_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../new-project/add-project.component */ "./src/app/features/projects/new-project/add-project.component.ts");
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










var ProjectsListComponent = /** @class */ (function () {
    function ProjectsListComponent(projectService, logger, dialog, sharedService, resolver) {
        this.projectService = projectService;
        this.logger = logger;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.resolver = resolver;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.hideAddProject = true;
        this.screenHeight = window.screen.height;
        this.screenWidth = window.screen.width;
        this.logger.log("Init() height: " + this.screenHeight + "; width: " + this.screenWidth);
        this.setDisplayedColumns();
    }
    ProjectsListComponent.prototype.createComponent = function (type, id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        this.hideAddProject = false;
        this.container.clear();
        var factory = this.resolver.resolveComponentFactory(_new_project_add_project_component__WEBPACK_IMPORTED_MODULE_5__["AddProjectComponent"]);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.type = type;
        this.componentRef.instance.projectId = id;
        this.componentRef.instance.sentProjEvent.subscribe(function (event) { return _this.receiveProjSuccess(event); });
    };
    ProjectsListComponent.prototype.ngOnDestroy = function () {
        //   console.log(this.componentRef);
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    ProjectsListComponent.prototype.closeClick = function () {
        this.hideAddProject = true;
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    ProjectsListComponent.prototype.receiveProjSuccess = function ($event) {
        this.loadProjects();
        this.closeClick();
    };
    ProjectsListComponent.prototype.onResize = function (event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        this.logger.log("Resize() height: " + this.screenHeight + "; width: " + this.screenWidth);
        this.setDisplayedColumns();
    };
    ProjectsListComponent.prototype.ngOnInit = function () {
        this.loadProjects();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ProjectsListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ProjectsListComponent.prototype.loadProjects = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (data) {
            _this.dataSource.data = data;
        });
    };
    ProjectsListComponent.prototype.receiveSuccess = function ($event) {
        //this.loadContacts();
        this.hideAddProject = true;
    };
    ProjectsListComponent.prototype.editProject = function (id) {
        this.createComponent('Edit', id);
    };
    ProjectsListComponent.prototype.deleteProject = function (project) {
        var _this = this;
        // Create configuration for the dialog
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.height = '200px';
        dialogConfig.width = '400px';
        dialogConfig.data = {
            title: "Delete  " + project.id + "- " + project.projectName,
            message: this.sharedService.getTranslation('PROJECT.CONFIRMTITLE')
        };
        var dialogRef = this.dialog.open(_app_shared_dialogs__WEBPACK_IMPORTED_MODULE_2__["ConfirmedDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dataSource.data = _this.dataSource.data.filter(function (e) { return e != project; });
                _this.projectService.deleteProject(project).subscribe();
            }
        });
    };
    /**
     * Update a list of table columns to be displayed based on the width of the screen.
     */
    ProjectsListComponent.prototype.setDisplayedColumns = function () {
        if (this.screenWidth < 420) {
            this.displayedColumns = ['id', 'projectName', 'projectManager', 'startDate', 'endDate', 'priority', 'action'];
        }
        else if (this.screenWidth >= 420 && this.screenWidth <= 800) {
            this.displayedColumns = ['id', 'projectName', 'startDate', 'endDate', 'priority', 'action'];
        }
        else {
            this.displayedColumns = ['id', 'projectName', 'projectManager', 'startDate', 'endDate', 'priority', 'action'];
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ProjectsListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ProjectsListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("projectContainer", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], ProjectsListComponent.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProjectsListComponent.prototype, "onResize", null);
    ProjectsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects-list',
            template: __webpack_require__(/*! ./projects-list.component.html */ "./src/app/features/projects/projects-list/projects-list.component.html"),
            styles: [__webpack_require__(/*! ./projects-list.component.scss */ "./src/app/features/projects/projects-list/projects-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["Logger"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _core_shared_function_service__WEBPACK_IMPORTED_MODULE_6__["SharedFunctionService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());



/***/ }),

/***/ "./src/app/features/projects/projects-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/projects/projects-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-list/projects-list.component */ "./src/app/features/projects/projects-list/projects-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { NewProjectComponent } from './new-project/new-project.component';
var projectsRoutes = [
    // 1st Route
    { path: '', component: _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsListComponent"] },
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(projectsRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/projects/projects.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/projects/projects.module.ts ***!
  \******************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-list/projects-list.component */ "./src/app/features/projects/projects-list/projects-list.component.ts");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/features/projects/projects-routing.module.ts");
/* harmony import */ var _shared_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/project.service */ "./src/app/features/projects/shared/project.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_shared_forms_material_forms_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/forms/material-forms.module */ "./src/app/shared/forms/material-forms.module.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _contacts_shared_contact_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contacts/shared/contact.service */ "./src/app/features/contacts/shared/contact.service.ts");
/* harmony import */ var _new_project_add_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-project/add-project.component */ "./src/app/features/projects/new-project/add-project.component.ts");
/* harmony import */ var _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/dialogs/dialogs.module */ "./src/app/shared/dialogs/dialogs.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_app_shared_pipes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/app-shared-pipes */ "./src/app/shared/app-shared-pipes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { ContactDetailComponent } from './contact-detail/contact-detail.component';




//import { NewContactComponent } from './new-contact/new-contact.component';








var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _app_shared_forms_material_forms_module__WEBPACK_IMPORTED_MODULE_5__["MaterialFormsModule"],
                _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"], _shared_app_shared_pipes__WEBPACK_IMPORTED_MODULE_12__["AppSharedPipesModule"],
                // ProjectResultFormComponent,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_10__["DialogsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            declarations: [
                //  ContactDetailComponent,
                _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsListComponent"],
                _new_project_add_project_component__WEBPACK_IMPORTED_MODULE_9__["AddProjectComponent"],
            ],
            providers: [
                _shared_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"], _contacts_shared_contact_service__WEBPACK_IMPORTED_MODULE_8__["ContactService"]
            ],
            entryComponents: [
                // ContactDetailComponent
                _new_project_add_project_component__WEBPACK_IMPORTED_MODULE_9__["AddProjectComponent"],
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ })

}]);
//# sourceMappingURL=features-projects-projects-module.js.map
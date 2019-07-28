(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-tasks-tasks-module"],{

/***/ "./src/app/features/tasks/new-task/new-task.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/features/tasks/new-task/new-task.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"small-card \">\n  <mat-toolbar color=\"primary\" layout=\"fill\">\n    {{ title }}\n  </mat-toolbar>\n\n  <div>\n    <mat-horizontal-stepper [linear]=\"true\" #stepper>\n\n      <mat-step [stepControl]=\"taskForm\">\n        <ng-template matStepLabel>{{'ADD_EDIT_TASK_PG.TASK_INFO' | translate}}</ng-template>\n        <form [formGroup]=\"taskForm\">\n          <div>\n            <mat-form-field>\n              <input matInput placeholder=\"{{'ADD_EDIT_TASK_PG.PROJECT' | translate}}\" [required]=\"false\" readonly\n                [value]=\"projectName\" formControlName=\"projectName\">\n              <mat-icon matSuffix color=\"primary\" (click)=\"openProjectsDataDialog(true)\">search</mat-icon>\n            </mat-form-field>\n\n          </div>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"{{'ADD_EDIT_TASK_PG.TASK_NAME' | translate}}\" formControlName=\"taskName\"\n              required>\n          </mat-form-field>\n          <mat-checkbox (change)='checkChangeEvent()' formControlName='isParentChecked' color='primary'>\n            {{'ADD_EDIT_TASK_PG.ISPARENT' | translate}}\n          </mat-checkbox>\n\n          <mat-form-field class=\"\">\n            <input formControlName=\"startDate\" [readOnly]=\"isDisabled\" matInput [matDatepicker]=\"picker\"\n              placeholder=\"  {{'ADD_EDIT_TASK_PG.STARTDATE' | translate}}\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker startView=\"year\" #picker></mat-datepicker>\n          </mat-form-field>\n\n          <mat-form-field class=\"\">\n            <input formControlName=\"endDate\" [readOnly]=\"isDisabled\" matInput [matDatepicker]=\"picker2\"\n              placeholder=\"  {{'ADD_EDIT_TASK_PG.ENDDATE' | translate}}\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2 startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n          </mat-form-field>\n\n          <div> {{'ADD_EDIT_TASK_PG.PRIORITY' | translate}}\n            <mat-slider formControlName=\"priority\" (input)=\"priority = $event.value\" step=\"1\" min=\"0\" max=\"5\"\n              thumbLabel=true [value]=\"priority\">\n            </mat-slider>\n          </div>\n          <div>\n            <mat-form-field>\n              <input matInput placeholder=\" {{'ADD_EDIT_TASK_PG.TASK_USER' | translate}}\" [required]=\"false\" readonly\n                [value]=\"userfullName\" formControlName=\"user\">\n              <mat-icon matSuffix color=\"primary\" (click)=\"openUserDataDialog(true)\">search</mat-icon>\n            </mat-form-field>\n\n          </div>\n        </form>\n\n        <div>\n          <button mat-raised-button matStepperNext type=\"button\" matTooltip=\"Next Step\"\n            class=\"btn-primary\">{{'STEPPERS.NEXT' | translate}}</button>\n        </div>\n      </mat-step>\n\n      <!-- Result Form for Step 4 -->\n      <mat-step>\n        <ng-template matStepLabel>{{'ADD_EDIT_TASK_PG.REVIEW' | translate}}</ng-template>\n        <app-task-result-form [formData]=\"getTask()\"></app-task-result-form>\n        <div class=\"top-15\">\n          <button mat-raised-button matStepperPrevious>{{'STEPPERS.PREIVIOUS' | translate}}</button>&nbsp;\n          <button class=\"btn-success\" mat-raised-button cdkFocusInitial\n            (click)=\"save()\">{{'ADD_EDIT_TASK_PG.SAVE' | translate}}</button>\n        </div>\n      </mat-step>\n\n    </mat-horizontal-stepper>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/features/tasks/new-task/new-task.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/features/tasks/new-task/new-task.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  width: 100%; }\n\n.main-div {\n  width: 80%;\n  margin: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.small-card {\n  max-width: 600px;\n  margin: auto;\n  width: 60%;\n  padding: 5px; }\n"

/***/ }),

/***/ "./src/app/features/tasks/new-task/new-task.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/tasks/new-task/new-task.component.ts ***!
  \***************************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_shared_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/dialogs */ "./src/app/shared/dialogs/index.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contacts_shared_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contacts/shared/contact.service */ "./src/app/features/contacts/shared/contact.service.ts");
/* harmony import */ var _projects_shared_project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../projects/shared/project */ "./src/app/features/projects/shared/project.ts");
/* harmony import */ var _shared_task__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/task */ "./src/app/features/tasks/shared/task.ts");
/* harmony import */ var _shared_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/task.service */ "./src/app/features/tasks/shared/task.service.ts");
/* harmony import */ var _projects_shared_project_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../projects/shared/project.service */ "./src/app/features/projects/shared/project.service.ts");
/* harmony import */ var _shared_models_projectInfoModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/models/projectInfoModel */ "./src/app/shared/models/projectInfoModel.ts");
/* harmony import */ var _core_shared_function_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/shared-function.service */ "./src/app/core/shared-function.service.ts");
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













var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent(formBuilder, router, taskService, dialog, contactService, projectService, sharedService, logger) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.taskService = taskService;
        this.dialog = dialog;
        this.contactService = contactService;
        this.projectService = projectService;
        this.sharedService = sharedService;
        this.logger = logger;
        this.priority = 0;
        this.title = '';
        this.sentTaskEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userfullName = '';
        this.projectName = '';
        this.selectedUser = new _projects_shared_project__WEBPACK_IMPORTED_MODULE_7__["Manager"]();
        this.selectedProject = new _shared_models_projectInfoModel__WEBPACK_IMPORTED_MODULE_11__["projectInfoModel"]();
        this.taskId = 0;
        this.isDisabled = false;
        this.startDate = new Date();
        this.task = this.createTaskStructure(this.taskId);
        this.buildTaskForm();
        this.getProjectManager();
        this.getProjectsInfo();
    }
    NewTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.taskId > 0)
            this.taskService.getTask(this.taskId).subscribe(function (data) {
                _this.task = data;
                if (_this.taskId > 0 && _this.task.contactId != null && _this.task.contactId > 0) {
                    _this.selectedUser = (_this.users.filter(function (x) { return x.id === _this.task.contactId; }))[0];
                }
                if (_this.taskId > 0 && _this.task.projectId != null && _this.task.projectId > 0) {
                    _this.selectedProject = (_this.projects.filter(function (x) { return x.id === _this.task.projectId; }))[0];
                }
                _this.buildTaskForm();
            });
        this.title = this.sharedService.getTranslationWithData('ADD_EDIT_TASK_PG.TITLE', { value: this.type });
    };
    NewTaskComponent.prototype.buildTaskForm = function () {
        this.taskForm = this.formBuilder.group({
            'id': [this.task.id],
            'taskName': [this.task.taskName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'isParentChecked': [this.task.isParent],
            'startDate': [this.task.startDate],
            'parentTaskId': [this.task.parentTaskId],
            'endDate': [this.task.endDate],
            'priority': [this.task.priority],
            'user': [this.selectedUser.fullName],
            'contactId': [this.selectedUser.id],
            'projectId': [this.selectedProject.id],
            'projectName': [this.selectedProject.projectName],
        });
        //this.projectForm.setValidators(this.comparisonValidator())
    };
    NewTaskComponent.prototype.getProjectsInfo = function () {
        var _this = this;
        this.projectService.getProjectsInfo()
            .subscribe(function (data) {
            _this.projects = (data);
            console.log(_this.projects);
        });
    };
    NewTaskComponent.prototype.getProjectManager = function () {
        var _this = this;
        this.contactService.getProjectManager()
            .subscribe(function (data) {
            _this.users = (data);
        });
    };
    NewTaskComponent.prototype.createTaskStructure = function (id) {
        var taskInfo = new _shared_task__WEBPACK_IMPORTED_MODULE_8__["TaskInfo"]('', id, null, '', false, '', null, null, null, null, '');
        return taskInfo;
    };
    NewTaskComponent.prototype.getTask = function () {
        return __assign({}, this.taskForm.value);
    };
    NewTaskComponent.prototype.checkChangeEvent = function () {
        this.isDisabled = !this.isDisabled;
        if (this.isDisabled) {
            this.taskForm.controls['startDate'].setValue('');
            this.taskForm.controls['endDate'].setValue('');
        }
        return;
    };
    //Open Dialog box and pass parameter 
    NewTaskComponent.prototype.openUserDataDialog = function (isAdd) {
        var _this = this;
        if (isAdd) {
            //this.selectedManager = null;
        }
        this.userDataDialog = this.dialog.open(_app_shared_dialogs__WEBPACK_IMPORTED_MODULE_3__["DataDialogComponent"], {
            data: { fillData: this.users, selectedOne: this.selectedUser, dialogTitle: "Select User" }, disableClose: true, width: '400px', height: '500px'
        });
        this.userDataDialog.afterClosed().pipe()
            .subscribe(function (result) {
            _this.retSelectedUser = result;
            if (Object.keys(result).length > 0 && _this.retSelectedUser !== null && _this.retSelectedUser !== undefined) {
                _this.selectedUser = _this.retSelectedUser;
                _this.userfullName = _this.retSelectedUser.fullName; // assing first from array 
                _this.taskForm.controls['contactId'].setValue(_this.selectedUser.id);
                _this.taskForm.controls['user'].setValue(_this.selectedUser.fullName);
            }
        });
    };
    NewTaskComponent.prototype.invalidForms = function () {
        return (this.taskForm.invalid);
    };
    NewTaskComponent.prototype.save = function () {
        var _this = this;
        if (this.invalidForms())
            return;
        var newTask = this.getTask();
        this.logger.log("New Task: " + newTask);
        if (this.task.id > 0) {
            this.taskService.updateTask(newTask).subscribe(function (result) {
                // if (result) {
                _this.taskForm.reset();
                _this.sentTaskEvent.emit('');
                //}
            });
        }
        else {
            newTask.id = undefined;
            this.taskService.addTask(newTask).subscribe(function (result) {
                //  if (result) {
                _this.taskForm.reset();
                _this.sentTaskEvent.emit('');
                // this.reset();
                // go to Contace List page
                // this.router.navigate(['/']);
                // }
            });
        }
    };
    NewTaskComponent.prototype.openProjectsDataDialog = function (isAdd) {
        var _this = this;
        if (isAdd) {
            //this.selectedManager = null;
        }
        this.projectDataDialog = this.dialog.open(_app_shared_dialogs__WEBPACK_IMPORTED_MODULE_3__["DataDialogComponent"], {
            data: { fillData: this.projects, selectedOne: this.selectedProject, isProject: true, dialogTitle: "Select Project" },
            disableClose: true, width: '400px', height: '500px'
        });
        this.projectDataDialog.afterClosed().pipe()
            .subscribe(function (result) {
            _this.retSelectedProject = result;
            if (Object.keys(result).length && _this.retSelectedProject !== null && _this.retSelectedProject !== undefined) {
                _this.selectedProject = _this.retSelectedProject;
                _this.projectName = _this.retSelectedProject.projectName; // assing first from array 
                _this.taskForm.controls['projectId'].setValue(_this.selectedProject.id);
                _this.taskForm.controls['projectName'].setValue(_this.selectedProject.projectName);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], NewTaskComponent.prototype, "taskForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", Object)
    ], NewTaskComponent.prototype, "stepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NewTaskComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewTaskComponent.prototype, "sentTaskEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], NewTaskComponent.prototype, "taskId", void 0);
    NewTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-task',
            template: __webpack_require__(/*! ./new-task.component.html */ "./src/app/features/tasks/new-task/new-task.component.html"),
            styles: [__webpack_require__(/*! ./new-task.component.scss */ "./src/app/features/tasks/new-task/new-task.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _shared_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _contacts_shared_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"],
            _projects_shared_project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"], _core_shared_function_service__WEBPACK_IMPORTED_MODULE_12__["SharedFunctionService"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["Logger"]])
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "./src/app/features/tasks/shared/task.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/tasks/shared/task.service.ts ***!
  \*******************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
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
var TaskService = /** @class */ (function () {
    function TaskService(http, logger, sharedService, toastService) {
        this.http = http;
        this.logger = logger;
        this.sharedService = sharedService;
        this.toastService = toastService;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].restApi;
        this.tasksUrl = this.baseUrl + "Tasks";
    }
    /**
     * GET: get all contacts from the database
     */
    TaskService.prototype.getTasks = function () {
        var _this = this;
        var UrlAction = this.tasksUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.tasksUrl + "/All";
        this.logger.log(UrlAction);
        return this.http
            .get(UrlAction, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.notify(_this.sharedService.getTranslation('TASK_PG.GET_TASKS_MSG'), 'GET'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getTasks', 'GET')));
    };
    /**
     * GET: get an existing contact from the database by an id
     */
    TaskService.prototype.getTask = function (id) {
        var _this = this;
        var UrlAction = this.tasksUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.tasksUrl + "/Task";
        // const url = `${UrlAction}/${id}`;
        var url = UrlAction + "/" + id;
        return this.http
            .get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.notify(_this.sharedService.getTranslationWithData('TASK_PG.FEATCH_TASK_BY_ID', { id: id }), 'GET'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(this.sharedService.getTranslationWithData('TASK_PG.FEATCH_TASK_BY_ID', { id: id }), 'GET')));
    };
    /**
     * POST: add a new contact to the database
     */
    TaskService.prototype.addTask = function (task) {
        var _this = this;
        this.logger.log(JSON.stringify(task));
        var UrlAction = this.tasksUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.tasksUrl + "/Create";
        return this.http
            .post(UrlAction, task, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (task) { return _this.notify(_this.sharedService.getTranslationWithData('TASK_PG.ADD_TASK_MSG', { value: task.id }), 'POST'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addTask', 'POST')));
    };
    /**
     * PUT: update an existing contact to the database
     */
    TaskService.prototype.updateTask = function (task) {
        var _this = this;
        this.logger.log(JSON.stringify(task));
        var id = typeof task === 'number' ? task : task.id;
        var UrlAction = this.tasksUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            UrlAction = UrlAction = this.tasksUrl + "/Update";
            UrlAction = UrlAction + "/" + id;
        }
        return this.http
            .put(UrlAction, task, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.notify(_this.sharedService.getTranslationWithData('TASK_PG.UPDATE_TASK_MSG', { value: task.id }), 'PUT'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateTask', 'PUT')));
    };
    TaskService.prototype.endTask = function (id) {
        var _this = this;
        var UrlAction = this.tasksUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            UrlAction = UrlAction = this.tasksUrl + "/EndTask";
            UrlAction = UrlAction + "/" + id;
        }
        return this.http
            .post(UrlAction, id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.notify(_this.sharedService.getTranslationWithData('TASK_PG.END_TASK_MSG', { value: id }), 'PUT'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('EndTask', 'PUT')));
    };
    /**
     * DELETE: delete an existing hero from the database
     */
    TaskService.prototype.deleteTask = function (task) {
        var _this = this;
        this.logger.log(JSON.stringify(task));
        var id = typeof task === 'number' ? task : task.id;
        var UrlAction = this.tasksUrl;
        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            UrlAction = this.tasksUrl + "/Remove";
        var url = UrlAction + "/" + id;
        return this.http
            .delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.notify(_this.sharedService.getTranslationWithData('TASK_PG.DELTE_TASK_MSG', { value: id }), 'DELETE'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteTask', 'DELETE')));
    };
    /**
     * Prepare an error handler for failed HTTP requests.
     * That handler extracts the error message and logs it.
     * It also adds the message to the errors$ observable to which the caller
     * may listen and react.
     * @param operation The name/description of the operation that failed
     * @param method The HTTP method for the failed HTTP request
     */
    TaskService.prototype.handleError = function (operation, method) {
        return function errorHandler(res) {
            this.logger.error(res);
            var eMsg = res.message || '';
            var error = this.entityNamePlural + " " + operation + " Error" + (eMsg ? ': ' + eMsg : '');
            this.notify(error, method);
        }.bind(this);
    };
    TaskService.prototype.notify = function (message, method) {
        this.toastService.openSnackBar(message, method);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["Logger"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["SharedFunctionService"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/features/tasks/shared/task.ts":
/*!***********************************************!*\
  !*** ./src/app/features/tasks/shared/task.ts ***!
  \***********************************************/
/*! exports provided: TaskInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskInfo", function() { return TaskInfo; });
var TaskInfo = /** @class */ (function () {
    function TaskInfo(projectName, id, projectId, taskName, isParent, priority, startdDate, parentTaskId, endDate, contactId, contactName) {
        this.projectName = projectName;
        this.id = id;
        this.projectId = projectId;
        this.taskName = taskName;
        this.isParent = isParent;
        this.priority = priority;
        this.startdDate = startdDate;
        this.parentTaskId = parentTaskId;
        this.endDate = endDate;
        this.contactId = contactId;
        this.contactName = contactName;
    }
    return TaskInfo;
}());



/***/ }),

/***/ "./src/app/features/tasks/task-result-form/task-result-form.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/features/tasks/task-result-form/task-result-form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> {{'STEPPERS.REVIEW_TITLE' | translate}} </h4>\n<h4>{{'ADD_EDIT_TASK_PG.PROJECT' | translate}}: </h4>\n{{ formData.projectName }}\n<h4>{{'ADD_EDIT_TASK_PG.TASK_NAME' | translate}}: </h4>\n{{ formData.taskName }}\n<h4>{{'ADD_EDIT_TASK_PG.ISPARENT' | translate}}: </h4>\n{{formData.isParentChecked}}\n<h4>{{'ADD_EDIT_TASK_PG.STARTDATE' | translate}}: </h4>\n{{formData.startDate}}\n<h4>{{'ADD_EDIT_TASK_PG.ENDDATE' | translate}}: </h4>\n{{formData.endDate}}\n<h4>{{'ADD_EDIT_TASK_PG.PRIORITY' | translate}}: </h4>\n{{formData.priority}}\n<h4>{{'ADD_EDIT_TASK_PG.TASK_USER' | translate}}: </h4>\n{{formData.user}}"

/***/ }),

/***/ "./src/app/features/tasks/task-result-form/task-result-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/features/tasks/task-result-form/task-result-form.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-right {\n  position: absolute;\n  right: 15px; }\n"

/***/ }),

/***/ "./src/app/features/tasks/task-result-form/task-result-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/tasks/task-result-form/task-result-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TaskResultFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskResultFormComponent", function() { return TaskResultFormComponent; });
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

var TaskResultFormComponent = /** @class */ (function () {
    function TaskResultFormComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskResultFormComponent.prototype, "formData", void 0);
    TaskResultFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-result-form',
            template: __webpack_require__(/*! ./task-result-form.component.html */ "./src/app/features/tasks/task-result-form/task-result-form.component.html"),
            styles: [__webpack_require__(/*! ./task-result-form.component.scss */ "./src/app/features/tasks/task-result-form/task-result-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], TaskResultFormComponent);
    return TaskResultFormComponent;
}());



/***/ }),

/***/ "./src/app/features/tasks/tasks-list/tasks-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/features/tasks/tasks-list/tasks-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"space-between center\" flex class=\"layout-align-space-between-center layout-row flex\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"{{'TASK_PG.SEARCH_TASKS' | translate}}\">\n  </mat-form-field>&nbsp;&nbsp;\n\n  <!-- <button class=\"btn-secondary\" mat-mini-fab matTooltip=\"Add a Task\">\n        <mat-icon (click)=\"loadAddTask();\" aria-label=\"add Task\">add</mat-icon> Add Task\n    </button> -->\n\n\n  <button mat-raised-button color=\"accent\" (click)=\"createComponent('Add',0)\">\n    <mat-icon aria-label=\"add task\">work_outline</mat-icon>{{'TASK_PG.ADD_TASK' | translate}}\n  </button>\n</div>\n\n<div class=\"basic-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"id\" matSortDirection=\"desc\" matSortDisableClear>\n\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>ID</th>\n      <td mat-cell *matCellDef=\"let task\">{{ task.id }}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"taskName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'TASK_PG.NAME' | translate}} </th>\n      <td mat-cell *matCellDef=\"let task\">{{ task.taskName }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"parentTaskId\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'TASK_PG.PARENT_TASK' | translate}} </th>\n      <td mat-cell *matCellDef=\"let task\">{{ task.parentTaskId !== null ? task.parentTaskId :'No Parent'}}</td>\n    </ng-container>\n\n\n    <!-- Work Type Column -->\n    <ng-container matColumnDef=\"priority\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'TASK_PG.PRIORITY' | translate}} </th>\n      <td mat-cell *matCellDef=\"let task\">{{ task.priority }}</td>\n    </ng-container>\n\n    <!-- State Column -->\n    <ng-container matColumnDef=\"startDate\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'TASK_PG.STARTDATE' | translate}}</th>\n      <td mat-cell *matCellDef=\"let task\">{{ task.startDate | formatDateText: 28: 'MM-dd-yyyy' }}</td>\n    </ng-container>\n\n    <!-- State Column -->\n    <ng-container matColumnDef=\"endDate\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'TASK_PG.ENDDATE' | translate}}</th>\n      <td mat-cell *matCellDef=\"let task\">{{ task.endDate | formatDateText: 28: 'MM-dd-yyyy' }}</td>\n    </ng-container>\n\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\n      <td mat-cell *matCellDef=\"let task\">\n        <button mat-icon-button color=\"accent\" matTooltip=\"{{'TASK_PG.EDIT_TASK' | translate}}\">\n          <mat-icon (click)=\"editTask(task.id)\" aria-label=\"edit task\">edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"warn\" matTooltip=\"{{'TASK_PG.DELETE_TASK' | translate}}\">\n          <mat-icon (click)=\"deleteTask(task)\" aria-label=\"delete task\">delete_forever</mat-icon>\n        </button>\n        <button *ngIf=\"task.status > 0\" mat-icon-button color=\"warn\" matTooltip=\"suspended task\">\n          <mat-icon aria-label=\"suspended task\">block</mat-icon>\n        </button>\n        <button *ngIf=\"task.status == 0\" mat-icon-button color=\"warn\" matTooltip=\"suspend task\">\n          <mat-icon (click)=\"endTask(task.id)\" aria-label=\"suspend task\">play_arrow</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  </table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10]\" showFirstLastButtons></mat-paginator>\n</div>\n<br />\n\n\n<div layout=\"row\" [hidden]=\"hideAddTask\" layout-align=\"space-between center\" flex\n  class=\"layout-align-space-between-center layout-row flex\">\n  <button mat-mini-fab color=\"accent\" (click)=\"closeClick()\" class=\"button-right\">\n    <mat-icon class=\"mat-24\">close</mat-icon>\n  </button>\n  <div class=\"basic-container mat-elevation-z8\">\n\n    <mat-card class=\"z-depth center\" flex=\"90\">\n\n      <template #taskContainer (sentTaskEvent)=\"receiveSuccess($event)\"></template>\n\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/features/tasks/tasks-list/tasks-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/features/tasks/tasks-list/tasks-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  width: 50%; }\n\n.btn-secondary {\n  background-color: #ffd740;\n  color: #000000; }\n\n.button-right {\n  position: absolute;\n  right: 45px;\n  z-index: 1; }\n"

/***/ }),

/***/ "./src/app/features/tasks/tasks-list/tasks-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/tasks/tasks-list/tasks-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: TasksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksListComponent", function() { return TasksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_shared_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/dialogs */ "./src/app/shared/dialogs/index.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/task.service */ "./src/app/features/tasks/shared/task.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../new-task/new-task.component */ "./src/app/features/tasks/new-task/new-task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TasksListComponent = /** @class */ (function () {
    function TasksListComponent(taskService, formBuilder, logger, resolver, dialog) {
        this.taskService = taskService;
        this.formBuilder = formBuilder;
        this.logger = logger;
        this.resolver = resolver;
        this.dialog = dialog;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.hideAddTask = true;
        this.screenHeight = window.screen.height;
        this.screenWidth = window.screen.width;
        this.logger.log("Init() height: " + this.screenHeight + "; width: " + this.screenWidth);
        this.setDisplayedColumns();
    }
    TasksListComponent.prototype.loadAddContact = function () {
        this.hideAddTask = !this.hideAddTask;
    };
    TasksListComponent.prototype.onResize = function (event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        this.logger.log("Resize() height: " + this.screenHeight + "; width: " + this.screenWidth);
        this.setDisplayedColumns();
    };
    TasksListComponent.prototype.createComponent = function (type, id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        this.hideAddTask = false;
        this.taskContainer.clear();
        var factory = this.resolver.resolveComponentFactory(_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_6__["NewTaskComponent"]);
        this.componentRef = this.taskContainer.createComponent(factory);
        this.componentRef.instance.type = type;
        this.componentRef.instance.taskId = id;
        this.componentRef.instance.sentTaskEvent.subscribe(function (event) { return _this.receiveSuccess(event); });
    };
    TasksListComponent.prototype.ngOnDestroy = function () {
        //   console.log(this.componentRef);
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    TasksListComponent.prototype.ngOnInit = function () {
        this.loadTasks();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    TasksListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    TasksListComponent.prototype.loadTasks = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (data) {
            _this.dataSource.data = data;
            //console.log(data);
        });
    };
    TasksListComponent.prototype.closeClick = function () {
        this.hideAddTask = true;
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    TasksListComponent.prototype.receiveSuccess = function ($event) {
        this.loadTasks();
        this.closeClick();
    };
    TasksListComponent.prototype.editTask = function (id) {
        this.createComponent('Edit', id);
    };
    TasksListComponent.prototype.endTask = function (id) {
        var _this = this;
        this.taskService.endTask(id).subscribe(function (data) { _this.loadTasks(); });
    };
    TasksListComponent.prototype.deleteTask = function (task) {
        var _this = this;
        // Create configuration for the dialog
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.height = '200px';
        dialogConfig.width = '400px';
        dialogConfig.data = {
            title: "Delete  " + task.id + "- " + task.taskName,
            message: 'Are you sure?'
        };
        var dialogRef = this.dialog.open(_app_shared_dialogs__WEBPACK_IMPORTED_MODULE_2__["ConfirmedDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dataSource.data = _this.dataSource.data.filter(function (e) { return e != task; });
                _this.taskService.deleteTask(task).subscribe();
            }
        });
    };
    TasksListComponent.prototype.getFullName = function (task) {
        return "" + task.taskName;
    };
    /**
     * Update a list of table columns to be displayed based on the width of the screen.
     */
    TasksListComponent.prototype.setDisplayedColumns = function () {
        if (this.screenWidth < 420) {
            this.displayedColumns = ['id', 'taskName', 'parentTaskId', 'action'];
        }
        else if (this.screenWidth >= 420 && this.screenWidth <= 800) {
            this.displayedColumns = ['id', 'taskName', 'parentTaskId', 'priority', 'startDate', 'endDate', 'action'];
        }
        else {
            this.displayedColumns = ['id', 'taskName', 'parentTaskId', 'priority', 'startDate', 'endDate', 'action'];
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("taskContainer", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], TasksListComponent.prototype, "taskContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TasksListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TasksListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TasksListComponent.prototype, "onResize", null);
    TasksListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks-list',
            template: __webpack_require__(/*! ./tasks-list.component.html */ "./src/app/features/tasks/tasks-list/tasks-list.component.html"),
            styles: [__webpack_require__(/*! ./tasks-list.component.scss */ "./src/app/features/tasks/tasks-list/tasks-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["Logger"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], TasksListComponent);
    return TasksListComponent;
}());



/***/ }),

/***/ "./src/app/features/tasks/tasks-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/tasks/tasks-routing.module.ts ***!
  \********************************************************/
/*! exports provided: TasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksRoutingModule", function() { return TasksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-list/tasks-list.component */ "./src/app/features/tasks/tasks-list/tasks-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var tasksRoutes = [
    // 1st Route
    { path: '', component: _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_2__["TasksListComponent"] },
];
var TasksRoutingModule = /** @class */ (function () {
    function TasksRoutingModule() {
    }
    TasksRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(tasksRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ]
        })
    ], TasksRoutingModule);
    return TasksRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/tasks/tasks.module.ts":
/*!************************************************!*\
  !*** ./src/app/features/tasks/tasks.module.ts ***!
  \************************************************/
/*! exports provided: TasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksModule", function() { return TasksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_forms_material_forms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/forms/material-forms.module */ "./src/app/shared/forms/material-forms.module.ts");
/* harmony import */ var _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-list/tasks-list.component */ "./src/app/features/tasks/tasks-list/tasks-list.component.ts");
/* harmony import */ var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks-routing.module */ "./src/app/features/tasks/tasks-routing.module.ts");
/* harmony import */ var _shared_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/task.service */ "./src/app/features/tasks/shared/task.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_app_shared_pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/app-shared-pipes */ "./src/app/shared/app-shared-pipes.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/dialogs/dialogs.module */ "./src/app/shared/dialogs/dialogs.module.ts");
/* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-task/new-task.component */ "./src/app/features/tasks/new-task/new-task.component.ts");
/* harmony import */ var _contacts_shared_contact_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contacts/shared/contact.service */ "./src/app/features/contacts/shared/contact.service.ts");
/* harmony import */ var _projects_shared_project_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../projects/shared/project.service */ "./src/app/features/projects/shared/project.service.ts");
/* harmony import */ var _task_result_form_task_result_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./task-result-form/task-result-form.component */ "./src/app/features/tasks/task-result-form/task-result-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var TasksModule = /** @class */ (function () {
    function TasksModule() {
    }
    TasksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _shared_app_shared_pipes__WEBPACK_IMPORTED_MODULE_6__["AppSharedPipesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                _app_shared_forms_material_forms_module__WEBPACK_IMPORTED_MODULE_1__["MaterialFormsModule"],
                _tasks_routing_module__WEBPACK_IMPORTED_MODULE_3__["TasksRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_10__["DialogsModule"]
            ],
            declarations: [
                _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_2__["TasksListComponent"],
                _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_11__["NewTaskComponent"],
                _task_result_form_task_result_form_component__WEBPACK_IMPORTED_MODULE_14__["TaskResultFormComponent"],
            ],
            exports: [],
            providers: [
                _shared_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"], _contacts_shared_contact_service__WEBPACK_IMPORTED_MODULE_12__["ContactService"], _projects_shared_project_service__WEBPACK_IMPORTED_MODULE_13__["ProjectService"]
            ],
            entryComponents: [_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_11__["NewTaskComponent"]
            ]
        })
    ], TasksModule);
    return TasksModule;
}());



/***/ })

}]);
//# sourceMappingURL=features-tasks-tasks-module.js.map
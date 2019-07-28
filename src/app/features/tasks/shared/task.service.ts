import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

//import { environment } from '../../../../environments/environment';
//import { Logger } from '../../../core/logger/logger.service';
import { environment } from '@env/environment';
import { Logger } from '@app/core';
import { ToastService } from '@app/core';

import { Task } from './task';
import { SharedFunctionService } from '../../../core';
import { managerModel } from '../../../shared/models/managerModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'TOKEN': environment.token })
};

@Injectable()
export class TaskService {
    private baseUrl = environment.restApi;
    private tasksUrl = `${this.baseUrl}Tasks`;

    constructor(
        private http: HttpClient,
        private logger: Logger,
        private sharedService: SharedFunctionService,
        private toastService: ToastService) {

    }


    /** 
     * GET: get all contacts from the database 
     */
    getTasks(): Observable<any> {

        let UrlAction = this.tasksUrl;
        if (environment.production)
            UrlAction = this.tasksUrl + "/All";

        this.logger.log(UrlAction);

        return this.http
            .get<Task[]>(UrlAction, httpOptions)
            .pipe(
                tap(_ => this.notify(this.sharedService.getTranslation('TASK_PG.GET_TASKS_MSG'), 'GET')),
                catchError(this.handleError('getTasks', 'GET'))
            );
    }


    /** 
     * GET: get an existing contact from the database by an id 
     */
    getTask(id: number): Observable<any> {
        let UrlAction = this.tasksUrl;
        if (environment.production)
            UrlAction = this.tasksUrl + "/Task";

        // const url = `${UrlAction}/${id}`;

        const url = `${UrlAction}/${id}`;
        return this.http
            .get<Task>(url, httpOptions)
            .pipe(
                tap(_ => this.notify(this.sharedService.getTranslationWithData('TASK_PG.FEATCH_TASK_BY_ID', { id: id })
                    , 'GET')),
                catchError(this.handleError(this.sharedService.getTranslationWithData('TASK_PG.FEATCH_TASK_BY_ID', { id: id }), 'GET'))
            );


    }

    /** 
     * POST: add a new contact to the database 
     */
    addTask(task: Task): Observable<any> {

        this.logger.log(JSON.stringify(task));
        let UrlAction = this.tasksUrl;
        if (environment.production)
            UrlAction = this.tasksUrl + "/Create";

        return this.http
            .post<Task>(UrlAction, task, httpOptions)
            .pipe(
                tap((task: Task) => this.notify(this.sharedService.getTranslationWithData('TASK_PG.ADD_TASK_MSG', { value: task.id }), 'POST')),
                catchError(this.handleError('addTask', 'POST'))
            );
    }

    /** 
     * PUT: update an existing contact to the database 
     */
    updateTask(task: Task): Observable<any> {
        this.logger.log(JSON.stringify(task));
        const id = typeof task === 'number' ? task : task.id;
        let UrlAction = this.tasksUrl;
        if (environment.production) {
            UrlAction = UrlAction = this.tasksUrl + "/Update";
            UrlAction = `${UrlAction}/${id}`;
        }
        return this.http
            .put(UrlAction, task, httpOptions)
            .pipe(
                tap(_ => this.notify(this.sharedService.getTranslationWithData('TASK_PG.UPDATE_TASK_MSG', { value: task.id }), 'PUT')),
                catchError(this.handleError('updateTask', 'PUT'))
            );
    }

    endTask(id: number): Observable<any> {
        let UrlAction = this.tasksUrl;
        if (environment.production) {
            UrlAction = UrlAction = this.tasksUrl + "/EndTask";
            UrlAction = `${UrlAction}/${id}`;
        }
        return this.http
            .post(UrlAction, id, httpOptions)
            .pipe(
                tap(_ => this.notify(this.sharedService.getTranslationWithData('TASK_PG.END_TASK_MSG', { value: id }), 'PUT')),
                catchError(this.handleError('EndTask', 'PUT'))
            );
    }

    /** 
     * DELETE: delete an existing hero from the database 
     */
    deleteTask(task: Task | number): Observable<any> {
        this.logger.log(JSON.stringify(task));
        const id = typeof task === 'number' ? task : task.id;

        let UrlAction = this.tasksUrl;
        if (environment.production)
            UrlAction = this.tasksUrl + "/Remove";

        const url = `${UrlAction}/${id}`;

        return this.http
            .delete<Task>(url, httpOptions)
            .pipe(
                tap(_ => this.notify(this.sharedService.getTranslationWithData('TASK_PG.DELTE_TASK_MSG', { value: id }), 'DELETE')),
                catchError(this.handleError('deleteTask', 'DELETE'))
            );
    }

    /**
     * Prepare an error handler for failed HTTP requests.
     * That handler extracts the error message and logs it.
     * It also adds the message to the errors$ observable to which the caller
     * may listen and react.
     * @param operation The name/description of the operation that failed
     * @param method The HTTP method for the failed HTTP request
     */
    protected handleError(operation: string, method: string) {
        return function errorHandler(res: HttpErrorResponse) {
            this.logger.error(res);
            const eMsg = res.message || '';
            const error = `${this.entityNamePlural} ${operation} Error${
                eMsg ? ': ' + eMsg : ''
                }`;
            this.notify(error, method);
        }.bind(this);
    }

    protected notify(message: string, method: string) {
        this.toastService.openSnackBar(message, method);
    }
}

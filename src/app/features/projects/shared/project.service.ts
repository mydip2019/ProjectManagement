import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
//import { environment } from '../../../../environments/environment';
//import { Logger } from '../../../core/logger/logger.service';
import { environment } from '@env/environment';
import { Logger } from '@app/core';
import { ToastService } from '@app/core';
import { projectInfoModel } from '../../../shared/models/projectInfoModel';
import { Project } from './Project';
import { SharedFunctionService } from '../../../core/shared-function.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'TOKEN': environment.token })
};

@Injectable()
export class ProjectService {
    private baseUrl = environment.restApi;
    private projectsUrl = `${this.baseUrl}Projects`;

    constructor(
        private http: HttpClient,
        private logger: Logger, private sharedService: SharedFunctionService,
        private toastService: ToastService) {
    }

    /** 
     * GET: get all Projects from the database 
     */
    getProjects(): Observable<any> {
        let UrlAction = this.projectsUrl;
        if (environment.production)
            UrlAction = this.projectsUrl + "/All";

        this.logger.log(UrlAction);
        return this.http
            .get<Project[]>(UrlAction, httpOptions)
            .pipe(
                tap(_ => this.notify(this.sharedService.getTranslation('PROJECT.GETPROJECTMSG'), 'GET')),
                catchError(this.handleError(this.sharedService.getTranslation('PROJECT.GETPROJECTMSG'), 'GET'))
            );


    }


    getProjectsInfo(): Observable<projectInfoModel[]> {
        let UrlAction = this.projectsUrl;
        if (environment.production)
            UrlAction = this.projectsUrl + "/All";

        return this.http.get(UrlAction, httpOptions).pipe(
            map((data: any[]) => data.map((item: any) => {
                const model = new projectInfoModel();
                model.projectName = item.projectName
                model.id = item.id;
                return model;
            }))
        );
    }


    /** 
     * GET: get an existing Project from the database by an id 
     */
    getProject(id: number): Observable<any> {
        let UrlAction = this.projectsUrl;
        if (environment.production)
            UrlAction = this.projectsUrl + "/Project";

        // const url = `${this.projectsUrl}/${id}`;
        const url = `${UrlAction}/${id}`;


        return this.http
            .get<Project>(url, httpOptions)
            .pipe(
                tap(_ => this.notify(this.sharedService.getTranslationWithData('PROJECT.FEATCHPROJECTBYID', { value: id }), 'GET')),
                catchError(this.handleError(this.sharedService.getTranslationWithData('PROJECT.FEATCHPROJECTBYID', { value: id }), 'GET'))
            );
    }

    /** 
     * POST: add a new Project to the database 
     */
    addProject(project: Project): Observable<any> {
        this.logger.log(JSON.stringify(project));
        let UrlAction = this.projectsUrl;
        if (environment.production)
            UrlAction = this.projectsUrl + "/Create";

        return this.http
            .post<Project>(UrlAction, project, httpOptions)
            .pipe(
                tap((project: Project) => this.notify(this.sharedService.getTranslationWithData('PROJECT.ADDPROJECTMSG', { value: project.id }), 'POST')),
                catchError(this.handleError('addProject', 'POST'))
            );
    }

    /** 
     * PUT: update an existing Project to the database 
     */
    updateProject(project: Project): Observable<any> {
        this.logger.log(JSON.stringify(project));
        const id = typeof project === 'number' ? project : project.id;
        let UrlAction = this.projectsUrl;
        if (environment.production) {
            UrlAction = UrlAction = this.projectsUrl + "/Update";
            UrlAction = `${UrlAction}/${id}`;
        }
        return this.http
            .put(UrlAction, project, httpOptions)
            .pipe(
                tap(_ => this.notify(this.sharedService.getTranslationWithData('PROJECT.ADDPROJECTMSG', { value: project.id }), 'PUT')),
                catchError(this.handleError('updateProject', 'PUT'))
            );
    }

    /** 
     * DELETE: delete an existing hero from the database 
     */
    deleteProject(project: Project | number): Observable<any> {
        const id = typeof project === 'number' ? project : project.id;

        let UrlAction = this.projectsUrl;
        if (environment.production)
            UrlAction = this.projectsUrl + "/Remove";

        const url = `${UrlAction}/${id}`;

        return this.http
            .delete<Project>(url, httpOptions)
            .pipe(
                tap(_ => this.notify(this.sharedService.getTranslationWithData('PROJECT.DELTEPROJECTMSG', { value: id }), 'DELETE')),
                catchError(this.handleError('deleteProject', 'DELETE'))
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

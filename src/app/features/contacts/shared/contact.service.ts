import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

//import { environment } from '../../../../environments/environment';
//import { Logger } from '../../../core/logger/logger.service';
import { environment } from '@env/environment';
import { Logger } from '@app/core';
import { ToastService } from '@app/core';

import { Contact } from './contact';
import { SharedFunctionService } from '../../../core';
import { managerModel } from '../../../shared/models/managerModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'TOKEN': environment.token })
};

@Injectable()
export class ContactService {
    private baseUrl = environment.restApi;

    private contactsUrl = `${this.baseUrl}Contacts`;
    constructor(
        private http: HttpClient,
        private logger: Logger,
        private sharedService: SharedFunctionService,
        private toastService: ToastService) {
        //   console.log('ggg')
        //   console.log(this.sharedService.getTranslationWithData('HOME.HELLO3', { value: 'world' }));
        //   console.log(this.sharedService.getTranslation('HOME.HELLO'));
        //   this.logger.log('---environment---' + environment.production)
    }


    /** 
     * GET: get all contacts from the database 
     */
    getContacts(): Observable<any> {
        let UrlAction = this.contactsUrl;
        if (environment.production)
            UrlAction = this.contactsUrl + "/All";

        this.logger.log(UrlAction);
        return this.http
            .get<Contact[]>(UrlAction, httpOptions)
            .pipe(
                tap(_ => this.notify(this.sharedService.getTranslation('CONTACT.GETCONTACTMSG'), 'GET')),
                catchError(this.handleError('getContacts', 'GET'))
            );

    }

    getProjectManager(): Observable<managerModel[]> {
        let UrlAction = this.contactsUrl;
        if (environment.production)
            UrlAction = this.contactsUrl + "/All";

        return this.http.get(UrlAction, httpOptions).pipe(
            map((data: any[]) => data.map((item: any) => {
                const model = new managerModel();
                model.fullName = item.firstName + ' ' + item.lastName;
                model.id = item.id;
                return model;
            }))
        );
    }

    /** 
     * GET: get an existing contact from the database by an id 
     */
    getContact(id: number): Observable<any> {
        let UrlAction = this.contactsUrl;
        if (environment.production)
            UrlAction = this.contactsUrl + "/Contact";

        // const url = `${this.contactsUrl}/${id}`;
        const url = `${UrlAction}/${id}`;
        return this.http
            .get<Contact>(url, httpOptions)
            .pipe(
                tap(_ => this.notify(this.sharedService.getTranslationWithData('CONTACT.FEATCHCONTACTBYID', { id: id })
                    , 'GET')),
                catchError(this.handleError(`getContact id=${id}`, 'GET'))
            );


    }

    /** 
     * POST: add a new contact to the database 
     */
    addContact(contact: Contact): Observable<any> {
        let UrlAction = this.contactsUrl;
        if (environment.production)
            UrlAction = this.contactsUrl + "/Create";

        return this.http
            .post<Contact>(UrlAction, contact, httpOptions)
            .pipe(
                tap((contact: Contact) => this.notify(this.sharedService.getTranslationWithData('CONTACT.ADD_CONTACT_MSG', { value: contact.id }), 'POST')),
                catchError(this.handleError('addContact', 'POST'))
            );
    }

    /** 
     * PUT: update an existing contact to the database 
     */
    updateContact(contact: Contact): Observable<any> {
        const id = typeof contact === 'number' ? contact : contact.id;
        let UrlAction = this.contactsUrl;
        if (environment.production) {
            UrlAction = UrlAction = this.contactsUrl + "/Update";
            UrlAction = `${UrlAction}/${id}`;
        }

        return this.http
            .put(UrlAction, contact, httpOptions)
            .pipe(
                tap(_ => this.notify(this.sharedService.getTranslationWithData('CONTACT.UPDATE_CONTACT_MSG', { value: id }), 'PUT')),
                catchError(this.handleError('updateContact', 'PUT'))
            );
    }

    /** 
     * DELETE: delete an existing hero from the database 
     */
    deleteContact(contact: Contact | number): Observable<any> {
        const id = typeof contact === 'number' ? contact : contact.id;

        let UrlAction = this.contactsUrl;
        if (environment.production)
            UrlAction = this.contactsUrl + "/Remove";

        const url = `${UrlAction}/${id}`;
        return this.http
            .delete<Contact>(url, httpOptions)
            .pipe(
                tap(_ => this.notify(this.sharedService.getTranslationWithData('CONTACT.DELTE_CONTACT_MSG', { value: id }), 'DELETE')),
                catchError(this.handleError('deleteContact', 'DELETE'))
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

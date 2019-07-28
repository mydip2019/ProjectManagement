import {
    Component, HostListener, OnInit, Pipe, PipeTransform
} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { ConfirmedDialogComponent } from '@app/shared/dialogs';
import { Logger } from '@app/core';
//import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { Project } from '../shared/project'
import { ProjectService } from '../shared/project.service';
import { AddProjectComponent } from '../new-project/add-project.component';
import {
    NgModule, Input, ComponentFactory, ComponentRef,
    ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef,
    TemplateRef, ViewChild, Output, EventEmitter
} from '@angular/core'
import { SharedFunctionService } from '../../../core/shared-function.service';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
    displayedColumns: string[];
    dataSource = new MatTableDataSource();
    screenHeight: any;
    screenWidth: any;
    public hideAddProject = true;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    @ViewChild("projectContainer", { read: ViewContainerRef }) container;
    componentRef: ComponentRef<any>;

    createComponent(type, id = 0) {
        this.hideAddProject = false;
        this.container.clear();
        const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(AddProjectComponent);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.type = type;
        this.componentRef.instance.projectId = id;
        this.componentRef.instance.sentProjEvent.subscribe(event => this.receiveProjSuccess(event));
    }

    ngOnDestroy() {
        //   console.log(this.componentRef);
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }


    closeClick() {
        this.hideAddProject = true;
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }

    receiveProjSuccess($event) {
        this.loadProjects();
        this.closeClick();
    }


    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        this.logger.log(`Resize() height: ${this.screenHeight}; width: ${this.screenWidth}`);
        this.setDisplayedColumns();
    }

    constructor(
        private projectService: ProjectService,
        private logger: Logger,
        private dialog: MatDialog, private sharedService: SharedFunctionService,
        private resolver: ComponentFactoryResolver
    ) {

        this.screenHeight = window.screen.height;
        this.screenWidth = window.screen.width;
        this.logger.log(`Init() height: ${this.screenHeight}; width: ${this.screenWidth}`);
        this.setDisplayedColumns();
    }

    ngOnInit() {
        this.loadProjects();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    loadProjects() {
        this.projectService.getProjects().subscribe(data => {
            this.dataSource.data = data;
        });
    }


    receiveSuccess($event) {
        //this.loadContacts();
        this.hideAddProject = true;
    }

    editProject(id: number): void {
        this.createComponent('Edit', id);
    }

    deleteProject(project: Project): void {
        // Create configuration for the dialog
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.height = '200px';
        dialogConfig.width = '400px';
        dialogConfig.data = {
            title: `Delete  ${project.id}- ${project.projectName}`,
            message: this.sharedService.getTranslation('PROJECT.CONFIRMTITLE')
        };

        const dialogRef = this.dialog.open(ConfirmedDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource.data = this.dataSource.data.filter(e => e != project);
                this.projectService.deleteProject(project).subscribe();
            }
        });
    }

    /**
     * Update a list of table columns to be displayed based on the width of the screen.
     */
    setDisplayedColumns() {
        if (this.screenWidth < 420) {
            this.displayedColumns = ['id', 'projectName', 'projectManager', 'startDate', 'endDate', 'priority', 'action'];
        }
        else if (this.screenWidth >= 420 && this.screenWidth <= 800) {
            this.displayedColumns = ['id', 'projectName', 'startDate', 'endDate', 'priority', 'action'];
        }
        else {
            this.displayedColumns = ['id', 'projectName', 'projectManager', 'startDate', 'endDate', 'priority', 'action'];
        }
    }
}


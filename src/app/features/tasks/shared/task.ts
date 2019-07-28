export interface Task {
    id: number;
    projectId: number;
    projectName: string;
    taskName: string;
    isParent: boolean;
    parentTaskId?: number;
    startDate?: Date;
    endDate?: Date;
    priority: string;
    contactId?: number;
    contactName?: string;
}



export class TaskInfo implements Task {
    constructor(public projectName: string, public id: number, public projectId: number, public taskName: string,
        public isParent: boolean, public priority: string, public startdDate?: Date, public parentTaskId?: number,
        public endDate?: Date,
        public contactId?: number,
        public contactName?: string
    ) { }
}






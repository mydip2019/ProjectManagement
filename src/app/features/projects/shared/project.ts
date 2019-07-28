export interface Project {
	id: number;
	projectManager: string;
	projectName: string;
	isSetDate: boolean;
	startDate?: Date;
	endDate?: Date;
	priority: string;
	contactId?: number;
}

export class ProjectInfo implements Project {
	constructor(public projectName: string, public id: number,
		public isSetDate: boolean, public priority: string, public projectManager: string, public startdDate?: Date,
		public endDate?: Date) { }
}


export class Manager {
	fullName: string;
	id: number;
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


@Component({
  selector: 'app-task-result-form',
  templateUrl: './task-result-form.component.html',
  styleUrls: ['./task-result-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskResultFormComponent {
  @Input() formData: any;
  constructor() { }

}



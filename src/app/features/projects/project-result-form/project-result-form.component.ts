
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-result-form',
  templateUrl: './project-result-form.component.html',
  styleUrls: ['./project-result-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectResultFormComponent {

  @Input() formData: any;

  constructor() { }

}



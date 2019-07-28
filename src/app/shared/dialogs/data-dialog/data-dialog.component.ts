import { Component, OnInit, Inject, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchComponent } from '../../search/search.component'
import { ListFilterPipe } from '../../search/list-filter.pipe';

@Component({
  selector: 'app-data-dialog',
  templateUrl: './data-dialog.component.html',
  styleUrls: ['./data-dialog.component.scss']
})
export class DataDialogComponent implements OnInit {
  dispListData: any;
  defSelectedOne: any;
  pageData: any;
  dialogTitle = ''
  page = 0;
  size = 5;
  pg = 1;
  @Input() isProjectSearch: boolean;
  public searchModel: string;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public sourceData

  ) {

    this.isProjectSearch = this.sourceData.isProject;
  }

  ngOnInit() {

    if (this.sourceData.isProject === undefined)
      this.isProjectSearch = false;
    else
      this.isProjectSearch = this.sourceData.isProject;

    this.dispListData = this.sourceData.fillData;
    this.dialogTitle = this.sourceData.dialogTitle;

    // console.log(this.dispListData);
    this.defSelectedOne = this.sourceData.selectedOne;

    // this.getData({ pageIndex: this.page, pageSize: this.size });
    // console.log(this.defSelectedOne);
  }


  getData(obj) {
    let index = 0,
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;
    this.pageData = this.dispListData.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  selectThis(sid) {
    //  console.log("Checking passed item: ", sid);
    if (sid !== undefined && sid > 0) {
      var ritem = this.dispListData.filter(x => x.id == parseInt(sid))[0];
      //  //  this.personCheckedIndex = event.checked ? item.id : -1;     
      this.dialogRef.close(ritem);
    }
    else
      this.dialogRef.close(this.defSelectedOne);
  }

}

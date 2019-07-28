// import { Pipe, PipeTransform } from '@angular/core';


// @Pipe({
//   name: 'listFilter'
// })
// export class ListFilterPipe implements PipeTransform {

//   transform(list: any[], model: any, filterText: string, isProject: boolean): any {
//     console.log('filteText');
//     console.log(JSON.stringify(model.name));
//     console.log(JSON.stringify(list));

//     if (!model.isProject) { return list ? list.filter(item => item.fullName.search(new RegExp(filterText, 'i')) > -1) : []; }
//     else { return list ? list.filter(item => item.projectName.search(new RegExp(filterText, 'i')) > -1) : []; }

//   }

// }


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterAll' })

export class ListFilterPipe implements PipeTransform {
  transform(value: any, searchText: any): any {
    if (!searchText) {
      return value;
    }
    return value.filter((data) => this.matchValue(data, searchText));
  }

  matchValue(data, value) {
    return Object.keys(data).map((key) => {
      return new RegExp(value, 'gi').test(data[key]);
    }).some(result => result);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: any, searchText: string) {
    if (!searchText) {
      return values;
    }
    if (!values) {
      return null;
    }
    searchText = searchText.toLowerCase();
    return values.data.filter(value => {
      return value.Vehicle?.name.toLowerCase().includes(searchText)
        || value.Vehicle?.Organization?.name.toLowerCase().includes(searchText)
        || value.Vehicle?.Department?.name.toLowerCase().includes(searchText)
        || value.Vehicle?.Contragent?.name.toLowerCase().includes(searchText)
        || value.code1c.toLowerCase().includes(searchText)
        || value.Aggregate?.name.toLowerCase().includes(searchText)
        || value.Drivers?.some(driver => {
          return driver.name.toLowerCase().includes(searchText);
        });
    });
  }

}

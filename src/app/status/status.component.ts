import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleCode } from '../shared/interface';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {

  dataSource: MatTableDataSource<VehicleCode>;
  displayedColumns: string[] = ['vehicle', 'name', 'department', 'counterparty', 'code', 'aggregate', 'drivers'];

  constructor(private http: HttpClient) {
    this.http.get('assets/data.json').subscribe(data => {
      this.dataSource = new MatTableDataSource(data as VehicleCode[]);
    })
  }

  ngOnInit(): void {
  }

}

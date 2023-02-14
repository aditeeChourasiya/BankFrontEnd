import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Bankv2Service } from './bankv2.service';


@Component({
  selector: 'app-bankv2',
  templateUrl: './bankv2.component.html',
  styleUrls: ['./bankv2.component.css']
})
export class Bankv2Component {
  dataSource: any;
  displayedColumns: string[] = ['bic', 'name', 'countryCode', 'auth'];

  @ViewChild(MatPaginator) paginator:any = MatPaginator;
  
  constructor(private service: Bankv2Service) {
    this.service.getData().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }
   
}


import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import bankv1 from 'src/assets/banksv1.json'
import { Bank } from 'src/model/Bank'

@Component({
  selector: 'app-bankv1',
  templateUrl: './bankv1.component.html',
  styleUrls: ['./bankv1.component.css']
})
export class Bankv1Component {
  //Data is stored from json file to array
  banks: Bank[] = bankv1
  //list of the columns to render
  displayedColumns: string[] = ['bic', 'name', 'countryCode', 'products', 'auth'];

  dataSource = new MatTableDataSource<Bank>(this.banks);
  //Child component is MatPaginator
  //View child decorator Assigns a property with a reference to html element
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //Loaded after the component html file is fully loaded
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}

import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class MaterialComponentsModule {}

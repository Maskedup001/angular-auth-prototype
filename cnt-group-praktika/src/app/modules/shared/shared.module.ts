import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../@theme/components/ui/table/table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent, // Чтобы другие модули могли использовать таблицу
    CommonModule
  ]
})
export class SharedModule { }
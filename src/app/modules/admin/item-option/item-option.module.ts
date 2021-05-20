import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalOptionComponent } from './modal-option/modal-option.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemOptionRoutingModule } from './item-option-routing.module';
import { ItemOptionComponent } from './item-option/item-option.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ItemOptionComponent,
    ModalOptionComponent,
  ],
  imports: [
    CommonModule,
    ItemOptionRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  entryComponents: [
    ModalOptionComponent
  ]
})
export class ItemOptionModule { }

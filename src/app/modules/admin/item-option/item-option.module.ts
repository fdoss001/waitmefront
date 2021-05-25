import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ModalOptionComponent } from './modal-option/modal-option.component';
import { ItemOptionRoutingModule } from './item-option-routing.module';
import { ItemOptionComponent } from './item-option/item-option.component';


@NgModule({
  declarations: [
    ItemOptionComponent,
    ModalOptionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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

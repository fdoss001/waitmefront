import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemOptionComponent } from './item-option/item-option.component';

const routes: Routes = [{ path: '', component: ItemOptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemOptionRoutingModule { }

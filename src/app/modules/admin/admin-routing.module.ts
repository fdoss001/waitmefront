import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '',  redirectTo: 'item-option',  pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'item-option', loadChildren: () => import('../admin/item-option/item-option.module').then(m => m.ItemOptionModule) }
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesaDirectivaPage } from './mesa-directiva.page';

const routes: Routes = [
  {
    path: '',
    component: MesaDirectivaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesaDirectivaPageRoutingModule {}

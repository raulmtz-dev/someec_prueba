import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlianzasPage } from './alianzas.page';

const routes: Routes = [
  {
    path: '',
    component: AlianzasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlianzasPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesaDirectivaPageRoutingModule } from './mesa-directiva-routing.module';

import { MesaDirectivaPage } from './mesa-directiva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesaDirectivaPageRoutingModule
  ],
  declarations: [MesaDirectivaPage]
})
export class MesaDirectivaPageModule {}

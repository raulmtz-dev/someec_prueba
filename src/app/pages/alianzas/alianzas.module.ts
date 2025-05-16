import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlianzasPageRoutingModule } from './alianzas-routing.module';

import { AlianzasPage } from './alianzas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlianzasPageRoutingModule
  ],
  declarations: [AlianzasPage]
})
export class AlianzasPageModule {}

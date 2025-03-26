import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvoidancePageRoutingModule } from './avoidance-routing.module';

import { AvoidancePage } from './avoidance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvoidancePageRoutingModule
  ],
  declarations: [AvoidancePage]
})
export class AvoidancePageModule {}

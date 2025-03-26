import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvoidancePage } from './avoidance.page';

const routes: Routes = [
  {
    path: '',
    component: AvoidancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvoidancePageRoutingModule {}

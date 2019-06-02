import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialCustomModule } from 'src/app/core/modules/angular-material-custom/angular-material-custom.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  exports: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialCustomModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { MainDashboardComponent } from './main-dashboard.component';
import { AddClassIfNotVisibleModule } from '@twitter-clone-ws/directives/add-class-if-not-visible'
import { SidebarModule } from './../../../sidebar/feature/sidebar/sidebar.module';

@NgModule({
    declarations: [MainDashboardComponent],
    imports: [
        CommonModule,
        MainDashboardRoutingModule,
        AddClassIfNotVisibleModule,
        SidebarModule
    ],
    exports: [],
    providers: []
})
export class MainDashboardModule { }

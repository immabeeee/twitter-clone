import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarUserComponent } from './sidebar-user.component';
@NgModule({
    declarations: [SidebarUserComponent],
    imports: [
        CommonModule,
    ],
    exports: [SidebarUserComponent],
})
export class SidebarUserModule { }

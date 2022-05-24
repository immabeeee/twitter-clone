import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarUserComponent } from './sidebar-user.component';
import { UiUserAvatarModule } from '@twitter-clone-ws/ui-user-avatar';

@NgModule({
    declarations: [SidebarUserComponent],
    imports: [
        CommonModule,
        UiUserAvatarModule
    ],
    exports: [SidebarUserComponent],
})
export class SidebarUserModule { }

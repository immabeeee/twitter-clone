import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TweetShellRoutingModule } from '../../../tweet/feature/tweet-shell/tweet-shell-routing.module';
import { SidebarComponent } from './sidebar.component';
import { UiSidebarLinkModule } from '@twitter-clone-ws/ui-sidebar-link'
import { UiButtonModule } from '@twitter-clone-ws/ui-button'
import { SidebarUserModule } from '../../ui/sidebar-user/sidebar-user.module';

@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        TweetShellRoutingModule,
        UiButtonModule,
        UiSidebarLinkModule,
        SidebarUserModule
    ],
    exports: [
        SidebarComponent
    ],
})
export class SidebarModule { }

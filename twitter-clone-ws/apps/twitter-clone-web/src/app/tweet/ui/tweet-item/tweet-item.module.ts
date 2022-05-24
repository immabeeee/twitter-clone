import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TweetItemComponent } from './tweet-item.component';
import { UiUserAvatarModule } from '@twitter-clone-ws/ui-user-avatar';
import { PipeTimeAgoModule } from '@twitter-clone-ws/pipe/time-ago'

@NgModule({
    declarations: [
        TweetItemComponent,
    ],
    imports: [
        CommonModule,
        UiUserAvatarModule,
        PipeTimeAgoModule
    ],
    exports: [TweetItemComponent],
})
export class TweetItemModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TweetItemComponent } from './tweet-item.component';
import { UiUserAvatarModule } from '@twitter-clone-ws/ui-user-avatar';

@NgModule({
    declarations: [
        TweetItemComponent
    ],
    imports: [
        CommonModule,
        UiUserAvatarModule
    ],
    exports: [TweetItemComponent],
})
export class TweetItemModule { }

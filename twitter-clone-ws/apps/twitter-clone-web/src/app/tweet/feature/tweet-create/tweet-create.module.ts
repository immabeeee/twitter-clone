import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TweetCreateComponent } from './tweet-create.component';
import { UiUserAvatarModule } from '@twitter-clone-ws/ui-user-avatar';
import { UiButtonModule } from '@twitter-clone-ws/ui-button';
import { DirectivesAutoResizeTextareaModule } from '@twitter-clone-ws/directives/auto-resize-textarea'

@NgModule({
    declarations: [
        TweetCreateComponent
    ],
    imports: [
        CommonModule,
        UiUserAvatarModule,
        DirectivesAutoResizeTextareaModule,
        UiButtonModule
    ],
    exports: [TweetCreateComponent],
})
export class TweetCreateModule { }

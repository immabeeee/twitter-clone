import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TweetItemModule } from '../tweet-item/tweet-item.module';
import { TweetListComponent } from './tweet-list.component';
import { UiSpinnerModule } from '@twitter-clone-ws/ui-spinner'

@NgModule({
    declarations: [
        TweetListComponent
    ],
    imports: [
        CommonModule,
        UiSpinnerModule,
        TweetItemModule
    ],
    exports: [TweetListComponent],
})
export class TweetListModule { }

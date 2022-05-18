import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TweetItemModule } from '../tweet-item/tweet-item.module';
import { TweetListComponent } from './tweet-list.component';

@NgModule({
    declarations: [
        TweetListComponent
    ],
    imports: [
        CommonModule,
        TweetItemModule
    ],
    exports: [TweetListComponent],
})
export class TweetListModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TweetListPageRoutingModule } from './tweet-list-page-routing.module';
import { TweetListPage } from './tweet-list.page';
import { UiButtonModule } from '@twitter-clone-ws/ui-button'
import { TweetListModule } from '../../ui/tweet-list/tweet-list.module';
import { TweetCreateModule } from '../tweet-create/tweet-create.module';

@NgModule({
    declarations: [
        TweetListPage
    ],
    imports: [
        CommonModule,
        TweetListPageRoutingModule,
        UiButtonModule,
        TweetListModule,
        TweetCreateModule
    ],
    exports: [],
})
export class TweetListPageModule { }

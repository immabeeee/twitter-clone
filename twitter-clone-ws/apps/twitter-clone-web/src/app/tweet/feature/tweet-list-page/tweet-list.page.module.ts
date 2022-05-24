import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TweetListPageRoutingModule } from './tweet-list-page-routing.module';
import { TweetListPageComponent } from './tweet-list.page';
import { UiButtonModule } from '@twitter-clone-ws/ui-button'
import { TweetListModule } from '../../ui/tweet-list/tweet-list.module';
import { TweetCreateModule } from '../tweet-create/tweet-create.module';
import { TweetsService } from '../../data-access/service/tweets.service';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
    declarations: [
        TweetListPageComponent
    ],
    imports: [
        CommonModule,
        TweetListPageRoutingModule,
        UiButtonModule,
        TweetListModule,
        TweetCreateModule,
        InfiniteScrollModule
    ],
    exports: [],
    providers: [TweetsService]
})
export class TweetListPageModule { }

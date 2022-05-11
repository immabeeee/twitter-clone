import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TweetListRoutingModule } from './tweet-list-routing.module';
import { TweetListComponent } from './tweet-list.component';

@NgModule({
    declarations: [
        TweetListComponent
    ],
    imports: [
        CommonModule,
        TweetListRoutingModule
    ],
    exports: [],
})
export class TweetListModule { }

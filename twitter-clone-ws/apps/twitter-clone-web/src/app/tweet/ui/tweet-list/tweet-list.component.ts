import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'twitter-clone-ws-tweet-list',
    templateUrl: './tweet-list.component.html',
    styleUrls: ['./tweet-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetListComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }
}

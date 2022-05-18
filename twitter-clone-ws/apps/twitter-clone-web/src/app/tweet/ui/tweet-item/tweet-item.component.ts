import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'twitter-clone-ws-tweet-item',
    templateUrl: './tweet-item.component.html',
    styleUrls: ['./tweet-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetItemComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }
}

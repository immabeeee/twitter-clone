import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TweetPost } from '@twitter-clone-ws/api-interfaces';

@Component({
    selector: 'twitter-clone-ws-tweet-item',
    templateUrl: './tweet-item.component.html',
    styleUrls: ['./tweet-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetItemComponent implements OnInit {
    @Input() tweet: TweetPost | null | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }
}

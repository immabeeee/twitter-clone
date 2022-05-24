import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TweetPost } from '@twitter-clone-ws/api-interfaces';

@Component({
    selector: 'twitter-clone-ws-tweet-list',
    templateUrl: './tweet-list.component.html',
    styleUrls: ['./tweet-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetListComponent implements OnInit {
    @Input() tweets!: TweetPost[];
    @Input() isLoading!: boolean;
    @Input() errorMessage!: string | null;

    constructor() {
    }

    ngOnInit(): void {
    }
}

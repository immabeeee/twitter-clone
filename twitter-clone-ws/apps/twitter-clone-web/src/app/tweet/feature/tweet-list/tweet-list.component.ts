import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twitter-clone-ws-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {

  constructor() {
    console.log("hi")
  }

  ngOnInit(): void {
  }

}

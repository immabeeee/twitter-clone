import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'twitter-clone-ws-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() isPrimary: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

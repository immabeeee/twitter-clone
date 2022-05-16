import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'twitter-clone-ws-ui-sidebar-link',
  templateUrl: './ui-sidebar-link.component.html',
  styleUrls: ['./ui-sidebar-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSidebarLinkComponent implements OnInit {
  @Input() text!: string;
  @Input() iconName!: string;
  @Input() link!: string;
  @Input() isActive: boolean = false;
  @Input() isPrimary: boolean = false;
  @Input() isSecondary: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

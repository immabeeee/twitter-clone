import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'twitter-clone-ws-ui-user-avatar',
  templateUrl: './ui-user-avatar.component.html',
  styleUrls: ['./ui-user-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiUserAvatarComponent {
  @Input() url: string = 'https://picsum.photos/200/300';
  @Input() alt: string = `user's avatar`;

  get urlWithCacheCode(): string {
    return `${this.url}?random=${Math.floor(Math.random() * 10000) + 1}`
  }

  constructor() { }

}

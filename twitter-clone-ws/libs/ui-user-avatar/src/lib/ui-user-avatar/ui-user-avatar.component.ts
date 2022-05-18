import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'twitter-clone-ws-ui-user-avatar',
  templateUrl: './ui-user-avatar.component.html',
  styleUrls: ['./ui-user-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiUserAvatarComponent {
  @Input() url: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Q0ue06sLTd7p0SbG_JKOEieaPj9xD8Thpg&usqp=CAU';
  @Input() alt: string = `user's avatar`;

  constructor() { }

}

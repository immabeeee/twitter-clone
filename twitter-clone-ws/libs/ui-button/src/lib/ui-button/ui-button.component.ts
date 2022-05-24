import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'twitter-clone-ws-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiButtonComponent {
  @Input() text!: string;
  @Input() isPrimary = true;
  @Input() isSmall = false;
  @Input() isDisabled = false;
  @Input() isSecondary = false;
}

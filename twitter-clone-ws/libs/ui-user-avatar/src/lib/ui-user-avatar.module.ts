import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiUserAvatarComponent } from './ui-user-avatar/ui-user-avatar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiUserAvatarComponent
  ],
  exports: [UiUserAvatarComponent]
})
export class UiUserAvatarModule { }

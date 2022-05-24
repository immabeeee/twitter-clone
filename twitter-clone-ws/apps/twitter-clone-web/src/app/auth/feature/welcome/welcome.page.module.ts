import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WelcomePageRoutingModule } from './welcome-page-routing.module';
import { WelcomePageComponent } from './welcome.page';
import { UiButtonModule } from '@twitter-clone-ws/ui-button'
import { MoodalModule } from '../../../shared/ui/modal/modal.module';
import { SignUpModule } from '../signup/signup.module';
import { SignInModule } from '../signin/signin.module';

@NgModule({
  declarations: [WelcomePageComponent],
  imports: [
    CommonModule,
    WelcomePageRoutingModule,
    MoodalModule,
    UiButtonModule,
    SignUpModule,
    SignInModule
  ],
  exports: [],
  providers: []
})
export class WelcomePageModule {}

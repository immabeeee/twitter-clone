import { Component } from '@angular/core';
@Component({
  selector: 'twitter-clone-ws-welcome-page',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  animations: []
})
export class WelcomePageComponent {
  public isSignUpModalVisible = false;
  public isSignInModalVisible = false;

  public toggleSignUpModal(): void {
    this.isSignUpModalVisible = !this.isSignUpModalVisible;
  }
  public toggleSignInModal(): void {
    this.isSignInModalVisible = !this.isSignInModalVisible;
  }
}

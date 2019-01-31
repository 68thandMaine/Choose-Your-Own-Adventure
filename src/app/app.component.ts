import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  player;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService){
    this.authService.player.subscribe(player => {
      if (player == null){
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = player.displayName;
      }
    });
  }
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}

import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'twitter-clone-ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isAuthRoute$ = this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    map((e: NavigationEnd) => e.url === this.authRouteUrl),
    tap((e) => console.log(e))
  );

  private readonly authRouteUrl = '/auth';

  constructor(private router: Router) {}
}

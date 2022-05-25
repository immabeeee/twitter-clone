import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tweets',
    pathMatch: 'full'
  },
  {
    path: 'tweets',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./tweet/feature/tweet-shell/tweet-shell.module').then(
        (module) => module.TweetShellModule
      )
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./auth/feature/auth-shell/auth-shell.module').then(
        (module) => module.AuthShellModule
      )
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

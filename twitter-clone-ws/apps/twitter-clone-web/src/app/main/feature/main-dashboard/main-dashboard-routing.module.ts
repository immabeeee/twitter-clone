import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard.component';

const routes: Routes = [
  {
    path: '**',
    component: MainDashboardComponent
  },
  {
    path: 'tweets',
    loadChildren: () =>
      import('./../../../tweet/feature/tweet-shell/tweet-shell.module').then(
        (module) => module.TweetShellModule
      )
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainDashboardRoutingModule {}

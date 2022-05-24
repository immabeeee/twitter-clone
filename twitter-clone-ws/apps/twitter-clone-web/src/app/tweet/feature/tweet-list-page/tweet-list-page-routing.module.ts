import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetListPageComponent } from './tweet-list.page';

const routes: Routes = [
    {
        path: '',
        component: TweetListPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TweetListPageRoutingModule { }
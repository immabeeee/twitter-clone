import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetListPage } from './tweet-list.page';

const routes: Routes = [
    {
        path: '',
        component: TweetListPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TweetListPageRoutingModule { }
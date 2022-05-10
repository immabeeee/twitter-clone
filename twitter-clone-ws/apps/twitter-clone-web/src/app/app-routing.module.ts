import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "tweets",
        loadChildren: () =>
            import("./tweet/feature/tweet-shell/tweet-shell.module").then(
                (module) => module.TweetShellModule
            ),
    },
    {
        path: '',
        redirectTo: 'tweets',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),],
    exports: [RouterModule]
})
export class AppRoutingModule { }

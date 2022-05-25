import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from './sidebar/feature/sidebar/sidebar.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AddClassIfNotVisibleModule } from '@twitter-clone-ws/directives/add-class-if-not-visible'
import { AuthGuard } from './auth/guard/auth.guard';
import { AuthService } from './auth/data-access/auth.service';
import { AuthRestService } from './auth/data-access/auth.rest.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtService } from './auth/data-access/jwt.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    AddClassIfNotVisibleModule,
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [AuthGuard, AuthService, AuthRestService, JwtService],
  bootstrap: [AppComponent],
})
export class AppModule { }

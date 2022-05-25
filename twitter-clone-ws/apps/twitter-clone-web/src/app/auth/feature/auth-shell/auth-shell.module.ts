import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthRestService } from '../../data-access/auth.rest.service';
import { JwtService } from '../../data-access/jwt.service';
import { AuthShellRoutingModule } from './auth-shell-routing.module';

@NgModule({
  imports: [AuthShellRoutingModule, HttpClientModule],
  providers: [AuthRestService, JwtService]
})
export class AuthShellModule {}

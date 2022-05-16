import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSidebarLinkComponent } from './ui-sidebar-link/ui-sidebar-link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    UiSidebarLinkComponent
  ],
  exports: [
    UiSidebarLinkComponent
  ]
})
export class UiSidebarLinkModule { }

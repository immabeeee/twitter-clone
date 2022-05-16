import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSidebarLinkComponent } from './ui-sidebar-link.component';

describe('UiSidebarLinkComponent', () => {
  let component: UiSidebarLinkComponent;
  let fixture: ComponentFixture<UiSidebarLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSidebarLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSidebarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

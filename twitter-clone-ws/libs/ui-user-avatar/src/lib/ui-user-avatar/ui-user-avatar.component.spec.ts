import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUserAvatarComponent } from './ui-user-avatar.component';

describe('UiUserAvatarComponent', () => {
  let component: UiUserAvatarComponent;
  let fixture: ComponentFixture<UiUserAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiUserAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiUserAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

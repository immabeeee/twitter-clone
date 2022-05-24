import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetListPageComponent } from './tweet-list.page';

describe('TweetListPageComponent', () => {
  let component: TweetListPageComponent;
  let fixture: ComponentFixture<TweetListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

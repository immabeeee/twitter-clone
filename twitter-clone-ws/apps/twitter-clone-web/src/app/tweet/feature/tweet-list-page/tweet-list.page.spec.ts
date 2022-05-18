import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetListPage } from './tweet-list.page';

describe('TweetListPage', () => {
  let component: TweetListPage;
  let fixture: ComponentFixture<TweetListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetListPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubredditContainerComponent } from './create-subreddit-container.component';

describe('CreateSubredditContainerComponent', () => {
  let component: CreateSubredditContainerComponent;
  let fixture: ComponentFixture<CreateSubredditContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubredditContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubredditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

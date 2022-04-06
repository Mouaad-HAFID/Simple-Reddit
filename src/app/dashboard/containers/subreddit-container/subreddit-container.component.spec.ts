import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditContainerComponent } from './subreddit-container.component';

describe('SubredditContainerComponent', () => {
  let component: SubredditContainerComponent;
  let fixture: ComponentFixture<SubredditContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubredditContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

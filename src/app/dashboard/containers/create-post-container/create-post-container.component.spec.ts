import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostContainerComponent } from './create-post-container.component';

describe('CreatePostContainerComponent', () => {
  let component: CreatePostContainerComponent;
  let fixture: ComponentFixture<CreatePostContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

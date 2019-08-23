import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDesktopComponent } from './profile-desktop.component';

describe('ProfileDesktopComponent', () => {
  let component: ProfileDesktopComponent;
  let fixture: ComponentFixture<ProfileDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

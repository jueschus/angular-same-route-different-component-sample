import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMobileDetailComponent } from './profile-mobile-detail.component';

describe('ProfileMobileDetailComponent', () => {
  let component: ProfileMobileDetailComponent;
  let fixture: ComponentFixture<ProfileMobileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMobileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMobileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMobileMenuComponent } from './profile-mobile-menu.component';

describe('ProfileMobileMenuComponent', () => {
  let component: ProfileMobileMenuComponent;
  let fixture: ComponentFixture<ProfileMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

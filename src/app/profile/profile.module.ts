import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileDesktopComponent } from "./profile-desktop/profile-desktop.component";
import { ProfileMenuComponent } from "./profile-menu/profile-menu.component";
import { ProfilePersonalComponent } from "./profile-personal/profile-personal.component";
import { ProfilePasswordComponent } from "./profile-password/profile-password.component";
import { RouterModule, UrlSegment } from "@angular/router";
import { ProfileDetailComponent } from "./profile-detail/profile-detail.component";
import { ProfileMobileMenuComponent } from "./profile-mobile-menu/profile-mobile-menu.component";
import { ProfileMobileDetailComponent } from "./profile-mobile-detail/profile-mobile-detail.component";

const MOBILE_BREAKPOINT = 992;

const profileChildRoutes = [
  {
    path: "personal",
    component: ProfilePersonalComponent
  },
  {
    path: "password",
    component: ProfilePasswordComponent
  }
];

const profileRoutes = [
  {
    matcher: (segments: UrlSegment[]) => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        return {
          consumed: []
        };
      }
      return null;
    },
    component: ProfileDesktopComponent,
    children: [
      {
        path: "",
        redirectTo: profileChildRoutes[0].path
      },
      ...profileChildRoutes
    ]
  },
  {
    matcher: (segments: UrlSegment[]) => {
      if (segments.length === 0 && window.innerWidth < MOBILE_BREAKPOINT) {
        return {
          consumed: []
        };
      }
      return null;
    },
    component: ProfileMobileMenuComponent,
    children: profileChildRoutes
  },
  {
    matcher: (segments: UrlSegment[]) => {
      if (segments.length > 0 && window.innerWidth < MOBILE_BREAKPOINT) {
        return {
          consumed: []
        };
      }
      return null;
    },
    component: ProfileMobileDetailComponent,
    children: profileChildRoutes
  }
];

@NgModule({
  declarations: [
    ProfileDesktopComponent,
    ProfileMenuComponent,
    ProfilePersonalComponent,
    ProfilePasswordComponent,
    ProfileDetailComponent,
    ProfileMobileMenuComponent,
    ProfileMobileDetailComponent
  ],
  imports: [CommonModule, RouterModule.forChild(profileRoutes)]
})
export class ProfileModule {}

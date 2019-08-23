# AngularSameRouteDifferentComponentSample

Sample project to demonstrate how to render different components with same routing path:

**Desktop View**

- /profile
  -- redirect to first child route
- /profile/personal
  -- show menu on the left (personal link active), personal form on the right
  /profile/password
  -- show menu on the left (password link active), password form on the right

**Mobile View**

- /profile
  -- show menu, no childroute active
- /profile/personal
  -- show only personal form, back button to profile menu
- /profile/password
  -- show only password form, back button to profile menu

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

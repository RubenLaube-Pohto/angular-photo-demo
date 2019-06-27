# PhotoDemo

An Angular 8 demo application with a REST API integration. Live as of writing: https://photo-demo-ca951.firebaseapp.com

The SPA fetches data from [a public development server][json-placeholder] that is then displayed to the user. Views are separately routed so that it is possible to enter the app through a shared link that displays the correct view and content for the user entering the app. Due to limitations of the server there are only methods for GET type operations and there are only browsing capabilities.

For getting the data I've usually built separate services using Angular's HttpClient. It was interesting to see that with the v8 release `@ngrx/data` was made available. In addition to making the state management setup a lot simpler it also enabled http calls to APIs following REST principles. There was some setup details but all in all it worked great with less setup than before. Fetching the biggest collection, photos, is done in chunks.

The simple UI was built with `@angular/material` and `@angular/flex-layout`. The biggest view could hold up to 5000 photos as DOM elements so there `ngx-virtual-scroller` was used in order to keep only the visible photos in the DOM. I did look into using the virtual scrolling available from `@angular/cdk` but that did not seem to support the layout I had in mind.

## Main libs

-   `@angular/{ ... }@8`,
-   `@ngrx/store`, `@ngrx/data`
-   `@angular/material`
-   `@angular/flex-layout`
-   `ngx-virtual-scroller`

## Setup

To install dependencies, run `npm i`. Also `@angular/cli` should be installed globaly in order to enable the `ng` command. This can be done with `npm i -g @angular/cli`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Known Issues

-   `ngx-virtual-scroller` works well when scrolling calmly but it can get confused with quick scrolling. Re-rendering the component resets it.

[json-placeholder]: http://jsonplaceholder.typicode.com/

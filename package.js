Package.describe({
  name: 'tony13tv:bootstrap-calendar',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap calendar from @Serhioromano, packaged for Meteor.js',
  // URL to the Git repository containing the source code for this package.
  git: 'https://www.github.com/tony13tv/meteor-bootstrap-calendar',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use("jquery", "client");
  api.use("underscore", "client");

  api.addFiles([
    "lib/css/calendar.css",
    "lib/js/calendar.js",
  ], "client");

  api.addAssets([
    "lib/tmpls/month.html",
    "lib/tmpls/day.html",
    "lib/tmpls/week.html",
    "lib/tmpls/events-list.html",
    "lib/tmpls/modal.html",
    "lib/tmpls/month-day.html",
    "lib/tmpls/month.html",
    "lib/tmpls/week-days.html",
    "lib/tmpls/week.html",
    "lib/tmpls/year.html",
    "lib/tmpls/year-month.html"
  ], "client"); 
});

Package.describe({
  name: 'tony13tv:bootstrap-calendar',
  version: '0.0.1',
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
    "lib/tmpls"
  ], "client");
});

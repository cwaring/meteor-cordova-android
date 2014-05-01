Package.describe({
  summary: "Apache Cordova is a platform for building native mobile applications using HTML, CSS and JavaScript."
});

Package.on_use(function (api, where) {
	"use strict";
	api.export && api.export('Cordova', 'client');
  api.add_files('lib/cordova.js', 'client');
  api.add_files('lib/cordova_plugins.js', 'client');
});
"use strict";

require.config({
    shim: {
        jquery : {
          exports : 'jquery'
        },
        underscore : {
          exports : '_'
        },
        backbone : {
          deps : ['jquery', 'underscore'],
          exports : 'Backbone'
        },
        wreqr: {
          deps : ['backbone']
        },
        babysitter : {
          deps: ['backbone']
        },
        marionette : {
          deps: ['wreqr', 'babysitter'],
          exports : 'Marionette'
        }
    },
    // baseUrl: "/maintainers/bower_components/",
    paths : {
        backbone : "../bower_components/backbone/backbone",
        underscore : "../bower_components/underscore/underscore",
        jquery : "../bower_components/jquery/dist/jquery",
        marionette : "../bower_components/backbone.marionette/lib/backbone.marionette",
        wreqr : "../bower_components/backbone.wreqr/lib/backbone.wreqr",
        babysitter : "../bower_components/backbone.babysitter/lib/backbone.babysitter",
        text: "../bower_components/requirejs-text/text"
    }
});

require([
    "app"
], function (App) {
    App.start();
});

define([
    "marionette"
], function (Marionette) {
    App = new Marionette.Application();
    App.listenTo(App, "start", function(){
        alert("Hello World!");
    });
    return App;
});

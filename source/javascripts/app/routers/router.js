(function(){
  "use strict";



  var Router = Backbone.Router.extend({

    routes: {
      ""             : "help"
    , "help"         : "help"
    , "about"        : "about"
    , "settings"     : "settings"
    , "at/:lat/:lng" : "at"
    , "view/:id"     : "view"
    , "nearby"       : "nearby"
    }
    
  , help: function() {
      new App.HelpView();
    }

  , about: function() {
      new App.AboutView();
    }

  , settings: function() {
      new App.SettingsView();
    }

  , at: function(lat, lng) {
      App.Inspections.fetchByLocation(lat, lng);
    }

  , view: function(id) {
      App.Violations.fetchByInspectionID(id);
    }
    
  , nearby: function() {
      App.location.detect(function(latLng){
        App.Inspections.fetchByLocation(latLng.lat(), latLng.lng());
      });
    }

  });
  
  
  
  App.Router = new Router();
  
  
  
}());
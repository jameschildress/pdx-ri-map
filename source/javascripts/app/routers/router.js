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
    
  });
  
  
  
  App.Router = new Router();
  
  
  
}());
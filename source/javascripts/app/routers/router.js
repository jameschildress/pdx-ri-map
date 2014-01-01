(function(){
  "use strict";



  App.Router = Backbone.Router.extend({

    routes: {
      "near/:lat/:lng": "near"
    , "view/:id":       "view"
    , "*catchall":      "default"
    }

  , near: function(lat, lng) {
      console.log("LAT: " + lat, "LONG: " + lng);
    }

  , view: function(id) {
      console.log("ID: " + id);
    }
    
  , default: function(splat) {
      console.log("SPLAT: " + splat);
    }

  });
  
  
  
}());
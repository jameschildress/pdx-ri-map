(function(){
  "use strict";



  var Router = Backbone.Router.extend({

    routes: {
      "at/:lat/:lng": "at"
    , "view/:id":     "view"
    , "nearby":       "nearby"
    }

  , at: function(lat, lng) {
      console.debug("ROUTE: at/:lat/:lng, lat = " + lat + ", lng = " + lng);
      App.Inspections.fetchByLocation(lat, lng);
    }

  , view: function(id) {
      console.debug("ROUTE: view/:id, id = " + id);
      App.Violations.fetchByInspectionID(id);
    }
    
  , nearby: function() {
      console.debug("ROUTE: nearby");
      navigator.geolocation.getCurrentPosition(function(location){
        App.Inspections.fetchByLocation(location.coords.latitude, location.coords.longitude);
      });
    }

  });
  
  
  
  App.Router = new Router();
  
  
  
}());
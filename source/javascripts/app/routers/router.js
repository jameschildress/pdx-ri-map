(function(){
  "use strict";



  var Router = Backbone.Router.extend({

    routes: {
      "near/:lat/:lng": "near"
    , "view/:id":       "view"
    , "":               "index"
    }

  , near: function(lat, lng) {
      console.debug("ROUTE: near/:lat/:lng, lat = " + lat + ", lng = " + lng);
      App.Inspections.fetchByLocation(lat, lng);
    }

  , view: function(id) {
      console.debug("ROUTE: view/:id, id = " + id);
      App.Violations.fetchByInspectionID(id);
    }
    
  , index: function() {
      console.debug("ROUTE: index");
      navigator.geolocation.getCurrentPosition(function(location){
        App.Inspections.fetchByLocation(location.coords.latitude, location.coords.longitude);
      });
    }

  });
  
  
  
  App.Router = new Router();
  
  
  
}());
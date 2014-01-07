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
        var lat = location.coords.latitude
          , lng = location.coords.longitude;
        App.Inspections.fetchByLocation(lat, lng);
        google.maps.event.trigger(App.map, 'click', { latLng: new google.maps.LatLng(lat, lng) });
      });
    }

  });
  
  
  
  App.Router = new Router();
  
  
  
}());
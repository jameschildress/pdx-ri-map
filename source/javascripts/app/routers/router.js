(function(){
  "use strict";



  var Router = Backbone.Router.extend({

    routes: {
      "at/:lat/:lng": "at"
    , "view/:id":     "view"
    , "nearby":       "nearby"
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
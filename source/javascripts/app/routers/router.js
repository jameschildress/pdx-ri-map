(function(){
  "use strict";



  App.Router = Backbone.Router.extend({

    routes: {
      "near/:lat/:lng": "near"
    , "view/:id":       "view"
    , "":               "index"
    }

  , near: function(lat, lng) {
      console.debug("ROUTE: near/:lat/:lng, lat = " + lat + ", lng = " + lng);
    }

  , view: function(id) {
      console.debug("ROUTE: view/:id, id = " + id);
    }
    
  , index: function() {
      console.debug("ROUTE: index");
    }

  });
  
  
  
}());
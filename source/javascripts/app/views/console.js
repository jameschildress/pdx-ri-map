(function(){
  "use strict";



  App.ConsoleView = Backbone.View.extend({
  
    initialize: function(options) {
      this.listenTo( App.Violations  , 'reset'        , this.onViolationsReset   );
      this.listenTo( App.Violations  , 'fetch'        , this.onViolationsFetch   );                    

      this.listenTo( App.Inspections , 'reset'        , this.onInspectionsReset  );
      this.listenTo( App.Inspections , 'fetch'        , this.onInspectionsFetch  );
      this.listenTo( App.Inspections , 'filter'       , this.onInspectionsFilter );
      this.listenTo( App.Inspections , 'sort'         , this.onInspectionsSort   );

      this.listenTo( App.location    , 'found'        , this.onLocationFound     );
      this.listenTo( App.location    , 'error'        , this.onLocationError     );

      this.listenTo( App.Router      , 'route:at'     , this.onRouteToAt         );
      this.listenTo( App.Router      , 'route:view'   , this.onRouteToView       );
      this.listenTo( App.Router      , 'route:nearby' , this.onRouteToNearby     );
    }


    
  , onViolationsReset: function(Violations) {
      console.debug("RESET: Violations");
      console.dir(Violations.models);    
    }

  , onViolationsFetch: function(Violations) {
      console.debug("FETCH: Violations");
    }
  
  
  
  , onInspectionsReset: function(Inspections) {
      console.debug("RESET: Inspections");
      console.dir(Inspections.models);
    }

  , onInspectionsFilter: function(Inspections) {
      console.debug("FILTER: Inspections");
      console.dir(Inspections.models);
    }

  , onInspectionsSort: function(Inspections) {
      console.debug("SORT: Inspections BY:", Inspections.comparator);
      console.dir(Inspections.models);
    }

  , onInspectionsFetch: function(Inspections) {
      console.debug("FETCH: Inspections");
    }
  
  
  
  , onLocationFound: function(latLng) {
      console.debug("LOCATION:", latLng.lat(), latLng.lng());
    }
  
  , onLocationError: function(message) {
      console.debug("ERROR:", message);
    }



  , onRouteToAt: function(lat, lng) {
      console.debug("ROUTE: at/:lat/:lng, lat = " + lat + ", lng = " + lng);
    }

  , onRouteToView: function(id) {
      console.debug("ROUTE: view/:id, id = " + id);
    }

  , onRouteToNearby: function() {
      console.debug("ROUTE: nearby");
    }
      
  });
 
  
  
}());

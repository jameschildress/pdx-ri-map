(function(){
  "use strict";



  App.ConsoleView = Backbone.View.extend({
  
    initialize: function(options) {
      var self = this;

      this.listenTo( App.events      , 'render'        , this.onRender            );
      
      this.listenTo( App.Violations  , 'reset'         , this.onViolationsReset   );
      this.listenTo( App.Violations  , 'fetch'         , this.onViolationsFetch   );                    
                                                       
      this.listenTo( App.Inspections , 'reset'         , this.onInspectionsReset  );
      this.listenTo( App.Inspections , 'fetch'         , this.onInspectionsFetch  );
      this.listenTo( App.Inspections , 'filter'        , this.onInspectionsFilter );
      this.listenTo( App.Inspections , 'sort'          , this.onInspectionsSort   );
                                                       
      this.listenTo( App.location    , 'found'         , this.onLocationFound     );
      this.listenTo( App.location    , 'error'         , this.onLocationError     );
      this.listenTo( App.location    , 'history'       , this.onLocationHistory   );
                                                       
      this.listenTo( App.Router      , 'route:at'      , this.onRouteToAt         );
      this.listenTo( App.Router      , 'route:view'    , this.onRouteToView       );
      
      _.each(['nearby', 'about', 'help', 'settings'], function(route){
        self.listenTo( App.Router , 'route:' + route , function(){ self.onRouteTo(route) });        
      });

      this.listenTo( App.settings , 'change:searchRadius'  , this.onSearchRadiusSet  );
      this.listenTo( App.settings , 'change:zoomToResults' , this.onZoomToResultsSet );
    }
  
  
  
  , onRender: function(viewName) {
      console.debug("RENDER:", viewName);
    }


    
  , onViolationsReset: function(Violations) {
      console.debug("RESET: Violations");
      console.dir(Violations.inspection);    
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

  , onLocationHistory: function(latLng) {
      console.log("LOCATION HISTORY:", latLng.lat(), latLng.lng());
    }
  
  , onLocationError: function(message) {
      console.warn("LOCATION ERROR:", message);
    }



  , onRouteToAt: function(lat, lng) {
      console.debug("ROUTE: at/:lat/:lng", lat, lng);
    }

  , onRouteToView: function(id) {
      console.debug("ROUTE: view/:id", id);
    }

  , onRouteTo: function(route) {
      console.debug("ROUTE:", route);
    }
    
    
    
  , onSearchRadiusSet: function() {
      console.debug("SETTING: searchRadius", App.settings.get('searchRadius'));
    }

  , onZoomToResultsSet: function() {
      console.debug("SETTING: zoomToResults", App.settings.get('zoomToResults'));
    }
      
  });
 
  
  
}());

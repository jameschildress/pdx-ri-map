(function(){
  "use strict";



  App.MainView = Backbone.View.extend({
  
    el: '#pdxri-main'

  , initialize: function() {
      this.view    = null;
      this.mapView = null;
      
      this.listenTo( App.Inspections , 'fetch'  , this.pending           );
      this.listenTo( App.Violations  , 'fetch'  , this.pending           );
      this.listenTo( App.Inspections , 'filter' , this.renderInspections );
      this.listenTo( App.Violations  , 'filter' , this.renderViolations  );
      this.listenTo( App.location    , 'seek'   , this.pending           );
      this.listenTo( App.events      , 'error'  , this.renderError       );
    }


    
  , render: function(view, mapView) {
      // Remove the currently rendered view if one exists
      if (this.view) {
        this.view.remove();
      }
      // Set the new view as the current view
      this.view = view;
      // Render the new view
      this.$el
        .empty()
        .removeClass('pending')
        .append(view.$el);
        
      // Remove the currently rendered map view if one exists
      if (this.mapView) {
        this.mapView.removeMarkers();
        this.mapView.remove();
      }
      
      // Set and render the new map view if one is provided
      if (mapView) {
        mapView.render();
        this.mapView = mapView;
      }
    }



  , pending: function() {
      this.$el
        .empty()
        .addClass('pending');
    }
    
  , renderError: function(message) {
      this.render(
        new App.ErrorMessageView({ message: message })
      );
    }
    
  , renderInspections: function() {
      this.render(
        new App.InspectionsListView()
      , new App.InspectionsMapView()
      );
    }

  , renderViolations: function() {
      this.render(
        new App.ViolationsListView()
      , new App.ViolationMapView()
      );
    }
  
  
  
  });
 
}());

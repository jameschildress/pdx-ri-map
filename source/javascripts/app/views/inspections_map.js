(function(){
  "use strict";



  App.InspectionsMapView = Backbone.View.extend({
  
    collection: App.Inspections

  , initialize: function() {
      this.markers = [];
      this.bounds = App.config.map.bounds;
                                     
      this.listenTo( this.collection , 'fetch'            , this.removeMarkers );
      this.listenTo( this.collection , 'filter'           , this.resetAndZoom  );
      this.listenTo( this.collection , 'sort'             , this.resetMarkers  );
      this.listenTo( App.events      , 'inspection:focus' , this.focusMarker   );
      this.listenTo( App.events      , 'inspection:blur'  , this.blurMarker    );
    
      google.maps.event.addListener(App.map, 'click', function(event){
        App.location.set(event.latLng);   
      });
    }
  
  
  
  , resetMarkers: function() {
      var i, model;
      this.bounds = new google.maps.LatLngBounds();
      this.removeMarkers();
      for (i in this.collection.models) {
        model = this.collection.models[i];
        this.addMarker(model);
        this.bounds.extend(model.latLng);
      }
    }
    
  , resetAndZoom: function() {
      this.resetMarkers();
      if (this.collection.length > 1 && App.settings.zoomToResults) {
        App.map.fitBounds(this.bounds);
      }
    }



  , removeMarkers: function() {
      var i = this.markers.length;
      while (i--) {
        this.markers.pop().hide();
      }
    }
    
  , addMarker: function(inspection) {
      var marker = new App.InspectionMapMarkerView({ model: inspection });
      this.markers.push(marker.render());
    }
    
  , focusMarker: function(inspection) {
      var index = this.collection.indexOf(inspection);
      this.markers[index].focus();
    }

  , blurMarker: function(inspection) {
      var index = this.collection.indexOf(inspection);
      this.markers[index].blur();
    }
    
    
    
  });
 
}());

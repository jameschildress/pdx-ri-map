(function(){
  "use strict";



  App.InspectionsMapView = Backbone.View.extend({
  
    el: '#pdxri-map'

  , collection: App.Inspections

  , mapOptions: {
      zoom:    11
    , minZoom: 11
    , center:  new google.maps.LatLng(45.5278, -122.5702)
    , streetViewControl: false
    }
      
  , render: function() {
      var i
        , inspections = this.collection.models;
      console.debug('RENDER: InspectionsMapView');
      for (i in inspections) {
        this.addMarker(inspections[i]);
      }
      return this;
    }

  , pending: function() {
      this.removeMarkers();
    } 
        
  , initialize: function() {
      this.markers = [];
      this.map = new google.maps.Map(this.$el[0], this.mapOptions);
      this.listenTo(this.collection, 'fetch' , this.pending );
      this.listenTo(this.collection, 'filter', this.render  );
    }
    
  , removeMarkers: function() {
      var i = this.markers.length;
      while (i--) {
        this.markers.pop().remove();
      }
    }
    
  , addMarker: function(inspection) {
      var marker = new App.InspectionMapMarkerView({ model: inspection, map: this.map });
      this.markers.push(marker.render(this.map));
    }
  
      
  });
 
  
  
}());

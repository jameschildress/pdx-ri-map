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
      var i;
      console.debug('RENDER: InspectionsMapView');
      for (i in this.collection.models) {
        this.addMarker(this.collection.models[i]);
      }
      return this;
    }



  , pending: function() {
      this.removeMarkers();
    } 
    
    
    
  , initialize: function() {
      this.markers = [];
      this.map = new google.maps.Map(this.$el[0], this.mapOptions);
      this.infoWindow = new google.maps.InfoWindow();
      this.queryMarker = new App.QueryMapMarkerView({
        map:        this.map
      , infoWindow: this.infoWindow
      });
      
      this.listenTo(this.collection, 'fetch' , this.pending );
      this.listenTo(this.collection, 'filter', this.render  );
      google.maps.event.addListener(this.map, 'click', this.mapClick);
    }
    
    
    
  , removeMarkers: function() {
      var i = this.markers.length;
      while (i--) {
        this.markers.pop().hide();
      }
      // this.queryMarker.hide();
    }
    
  , addMarker: function(inspection) {
      var marker = new App.InspectionMapMarkerView({
        model:      inspection
      , map:        this.map
      , infoWindow: this.infoWindow
      });
      this.markers.push(marker.render());
    }
    
    
    
  , mapClick: function(event) {
      // this.queryMarker.render(event.latLng);
    }
  
 
      
  });
 
}());

(function(){
  "use strict";



  App.InspectionsMapView = Backbone.View.extend({
  
    collection: App.Inspections
  
  
  
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
      
      this.listenTo(this.collection, 'fetch' , this.pending );
      this.listenTo(this.collection, 'filter', this.render  );
      
      google.maps.event.addListener(App.map, 'click', function(event){
        App.location.set(event.latLng);   
      });
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
  
 
      
  });
 
}());

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
      var self = this;
      
      this.markers = [];
      this.queryMarker = new App.QueryMapMarkerView();
      
      this.listenTo(this.collection, 'fetch' , this.pending );
      this.listenTo(this.collection, 'filter', this.render  );
      
      google.maps.event.addListener(App.map, 'click', function(event){
        self.queryMarker.render(event.latLng);
      });
    }
    
    
    
  , removeMarkers: function() {
      var i = this.markers.length;
      while (i--) {
        this.markers.pop().hide();
      }
      this.queryMarker.hide();
    }
    
  , addMarker: function(inspection) {
      var marker = new App.InspectionMapMarkerView({ model: inspection });
      this.markers.push(marker.render());
    }
  
 
      
  });
 
}());

(function(){
  "use strict";



  App.InspectionsMapView = Backbone.View.extend({
  
    collection: App.Inspections
  
  

  , initialize: function() {
      this.markers = [];
                                     
      this.listenTo( this.collection , 'fetch'            , this.removeMarkers );
      this.listenTo( this.collection , 'filter'           , this.resetMarkers  );
      this.listenTo( this.collection , 'sort'             , this.resetMarkers  );
      this.listenTo( App.events      , 'inspection:focus' , this.focusMarker   );
      this.listenTo( App.events      , 'inspection:blur'  , this.blurMarker    );
    
      google.maps.event.addListener(App.map, 'click', function(event){
        App.location.set(event.latLng);   
      });
    }
  
  , resetMarkers: function() {
      var i;
      this.removeMarkers();
      for (i in this.collection.models) {
        this.addMarker(this.collection.models[i]);
      }
      return this;
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

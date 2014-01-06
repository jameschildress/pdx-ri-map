(function(){
  "use strict";



  App.InspectionMapMarkerView = Backbone.View.extend({
  
    render: function(map) {
      this.marker.setMap(map);
      return this;
    }
    
  , initialize: function() {
      this.marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.model.get('latitude'), this.model.get('longitude'))
      , title:    this.model.get('restaurantName')
      });
    }
    
  , remove: function(){
      this.marker.setMap(null);
    }
  
  });
 
  
  
}());




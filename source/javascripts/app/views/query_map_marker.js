(function(){
  "use strict";



  App.QueryMapMarkerView = Backbone.View.extend({
    
    render: function(latLng) {
      this.circle.setCenter(latLng);
      this.circle.setMap(App.map);
      this.marker.setPosition(latLng);
      this.marker.setMap(App.map);
    }
    
  , initialize: function() {
      this.marker = new google.maps.Marker();
      this.circle = new google.maps.Circle(App.config.map.circle);
    }
    
  , hide: function(){
      this.marker.setMap(null);
      this.circle.setMap(null);
    }
  
  });
 
  
  
}());




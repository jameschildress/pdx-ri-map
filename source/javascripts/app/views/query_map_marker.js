(function(){
  "use strict";



  App.QueryMapMarkerView = Backbone.View.extend({
  
    render: function(latLng) {
      this.marker.setPosition(latLng);
      this.marker.setMap(App.map);
    }
    
  , initialize: function() {
      this.marker = new google.maps.Marker();
      // this.circle = 
    }
    
  , hide: function(){
      this.marker.setMap(null);
      // this.circle.setMap(null);
    }
  
  });
 
  
  
}());




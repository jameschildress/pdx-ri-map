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
      this.circle = new google.maps.Circle({
        radius: App.config.proxy.maxDistance / 0.00062137  // convert miles to meters
      , strokeOpacity: 0
      , fillColor:     '#0077cc'
      , fillOpacity:   0.4
      });
    }
    
  , hide: function(){
      this.marker.setMap(null);
      this.circle.setMap(null);
    }
  
  });
 
  
  
}());




(function(){
  "use strict";



  App.InspectionMapMarkerView = Backbone.View.extend({
  
    render: function() {
      var self = this;
      this.marker.setMap(App.map);
      google.maps.event.addListener(this.marker, 'click', function() {
        App.infoWindow.setContent(
          new App.InspectionListItemView({ model: self.model }).render().$el[0]
        );
        App.infoWindow.open(App.map, self.marker);
      });
      return this;
    }
    
  , initialize: function(options) {
      this.marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.model.get('latitude'), this.model.get('longitude'))
      , title:    this.model.get('restaurantName')
      });
    }
    
  , hide: function() {
      this.marker.setMap(null);
    }
    
  , focus: function() {
      this.marker.setAnimation(google.maps.Animation.BOUNCE);
    }
    
  , blur: function() {
      this.marker.setAnimation(null);
    }
  
  });
 
  
  
}());




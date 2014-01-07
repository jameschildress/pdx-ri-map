(function(){
  "use strict";



  App.InspectionMapMarkerView = Backbone.View.extend({
  
    render: function() {
      var self = this;
      this.marker.setMap(self.map);
      google.maps.event.addListener(this.marker, 'click', function() {
        self.infoWindow.setContent(
          new App.InspectionListItemView({ model: self.model }).render().$el[0]
        );
        self.infoWindow.open(self.map, self.marker);
      });
      return this;
    }
    
  , initialize: function(options) {
      this.map = options.map
      this.infoWindow = options.infoWindow
      this.marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.model.get('latitude'), this.model.get('longitude'))
      , title:    this.model.get('restaurantName')
      });
    }
    
  , hide: function(){
      this.marker.setMap(null);
    }
  
  });
 
  
  
}());




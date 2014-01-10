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
      this.icon = App.markerIcons[this.model.grade];
      this.marker = new google.maps.Marker({
        position: this.model.latLng
      , title:    this.model.get('restaurantName')
      , icon:     this.icon
      });
    }
    
  , hide: function() {
      this.marker.setMap(null);
    }
    
  , focus: function() {
      this.marker.setIcon(_.last(App.markerIcons));
      this.marker.setAnimation(google.maps.Animation.BOUNCE);
    }
    
  , blur: function() {
      this.marker.setIcon(this.icon);
      this.marker.setAnimation(null);
    }
  
  });
 
  
  
}());




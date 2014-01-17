(function(){
  "use strict";



  App.AreaMapMarkerView = Backbone.View.extend({
  
    collection: App.Inspections
  
  , render: function() {
      this.circle.setCenter(App.location.latLng);
      this.circle.setMap(App.map); 
      return this;
    }
    
  , initialize: function(options) {
      this.circle = new google.maps.Circle(App.config.map.circle);
      this.setRadius();

      this.listenTo( App.location    , 'change'               , this.render    );
      this.listenTo( App.settings    , 'change:searchRadius'  , this.setRadius );
    }
    
  , setRadius: function() {
      this.circle.setRadius(
        App.utils.milesToMeters(
          App.settings.get('searchRadius')
        )
      );
    }
    
  , hide: function() {
      if (this.circle.getMap()) {
        this.circle.setMap(null);  
      }
    }
  
  });
 
  
  
}());




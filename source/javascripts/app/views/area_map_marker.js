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

      this.listenTo( App.location, 'change', this.render );
      this.listenTo( App.location, 'found' , this.render );
      this.listenTo( App.location, 'seek'  , this.hide   );
    }
    
  , hide: function(){
      this.circle.setMap(null);
    }
  
  });
 
  
  
}());




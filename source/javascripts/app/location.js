(function(){
  "use strict";



  App.location = {
    
    latLng: null
    
    // TODO: raise event when location API does not exist
  , detect: function(onSuccess) {
      var self = this;
      self.trigger('seek');
      navigator.geolocation.getCurrentPosition(function(location){
        self.latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
        self.trigger('found', self.latLng);
        onSuccess(self.latLng);
      });
    }
    
  , set: function(latLng) {
      this.latLng = latLng;
      this.trigger('change', latLng);
    }
    
  }
  
  
  
  _.extend(App.location, Backbone.Events);
  
  
  
}());
 
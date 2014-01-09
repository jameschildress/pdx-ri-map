(function(){
  "use strict";



  App.location = {
    
    latLng: null
    
    // TODO: raise event when location API does not exist
  , detect: function(onSuccess) {
      var self = this;
      self.trigger('seek');
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(location){
          self.latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
          self.trigger('found', self.latLng);
          onSuccess(self.latLng);
        }, self.error);
      } else {
        self.trigger('error', 'This browser does not support geolocation.');
      }
    }
    
  , set: function(latLng) {
      this.latLng = latLng;
      this.trigger('change', latLng);
    }
    
  , error: function(err) {
      var msg = '';
      switch(err.code) {
        case err.PERMISSION_DENIED:
          msg = 'You have denied permission to get your current location.'
          break;
        case err.POSITION_UNAVAILABLE:
        case err.TIMEOUT:
          msg = 'Your current location could not be determined.'
          break;
        case err.UNKNOWN_ERROR:
          msg = 'An error occurred while getting your current location.'
          break;
      }
      App.location.trigger('error', msg);
    }
    
  }
  
  
  
  _.extend(App.location, Backbone.Events);
  
  
  
}());
 
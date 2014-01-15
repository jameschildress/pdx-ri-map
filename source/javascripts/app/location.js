(function(){
  "use strict";



  App.location = {
    
    latLng: null

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
      if (App.config.map.bounds.contains(latLng)) {
        this.latLng = latLng;
        this.trigger('change', latLng);
      }
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
    
    

    // Call this after the collections have been loaded
    // Begins history-tracking for when closing a InspectionDetailsView
  , initialize: function() {
      this.listenTo( App.Inspections , 'fetch' , this.updateHistory );
    }
    
  , historyLatLng: null
    
  , updateHistory: function() {
      this.historyLatLng = this.latLng;
      this.trigger('history', this.historyLatLng);
    }
    
  }
  
  
  
  _.extend(App.location, Backbone.Events);
  
  
  
}());
 
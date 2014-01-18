(function(){
  "use strict";



  App.location = {
    
    latLng: null
    
  , detect: function(callback) {
      var self = this;
      self.trigger('seek');
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(location){
          self.latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
          self.trigger('found', self.latLng);
          callback(self.latLng);
        }, self.error);
      } else {
        App.events.trigger('error', 'This browser does not support geolocation.');
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
      App.events.trigger('error', msg);
    }
    
    

    // Call this after the collections have been loaded
  , initialize: function() {
      // Location history for when closing a InspectionDetailsView
      this.listenTo( App.Router , 'route:at' , this.updateHistory );      
      this.listenTo( this       , 'found'    , this.updateHistory );      
      // Map click event
      google.maps.event.addListener(App.map, 'click', function(event){
        App.location.set(event.latLng);   
      });
    }
    
  , historyLatLng: null
    
    // Accept either two floats or a single latLng object.
  , updateHistory: function(latOrLatLng, lng) {
      if (_.isUndefined(lng)) {
        // Treat as a single latLng
        this.historyLatLng = latOrLatLng;
      } else {
        // Treat as two numbers
        this.historyLatLng = new google.maps.LatLng(latOrLatLng, lng);
      }
      this.trigger('history', this.historyLatLng);
    }
  
  
  
  , geocoder: new google.maps.Geocoder()

  , geocode: function(address, callback) {
      var self = this;
      
      this.geocoder.geocode(
        {
          address : address
        , bounds  : App.config.map.bounds
        }
      , function(results) {
          // If there is an error connecting to the geocoder service
          if (!results) {
            App.utils.ajaxError();
            return;
          }
          // If one or more matching addresses are found
          if (results.length > 0) {
            self.latLng = results[0].geometry.location;
            self.trigger('found', self.latLng);
            callback(self.latLng);
          // If no addresses are found
          } else {
            App.events.trigger('error', 'The address could not be found in Portland.');
          }
        }
      );
      this.trigger('seek');
    }
    
  }
  
  
  
  _.extend(App.location, Backbone.Events);
  
  
  
}());
 
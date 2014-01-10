(function(){
  "use strict";



  App.utils = {
    
    // Return a date in the format YYYY-MM-DD
    formatDate: function(date) {
      return [
        date.getFullYear()
      , date.getMonth() + 1
      , date.getDate()
      ].join('-');
    }
    
  , searchRadiusInMeters: function() {
      return App.settings.searchRadius / 0.00062137;
    }
    
  }
  
  
  
  // Miscellaneous event dispatcher
  App.events = _.clone(Backbone.Events);
  
  
  
}());
 
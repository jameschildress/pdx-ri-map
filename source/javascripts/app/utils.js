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
    
  }
  
  
  
  // Miscellaneous event dispatcher
  App.events = _.clone(Backbone.Events);
  
  
  
}());
 
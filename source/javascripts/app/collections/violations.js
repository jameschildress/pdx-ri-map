(function(){
  "use strict";



  var ViolationsCollection = Backbone.Collection.extend({

    model: App.Violation
  , url:   App.config.proxy.url
  
  , queryParams: function(inspectionID) {
      return {
        id: inspectionID
      };
    }

  });
  
  
  
  App.Violations = new ViolationsCollection();
  
  
  
}());
 
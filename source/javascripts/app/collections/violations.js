(function(){
  "use strict";



  var ViolationsCollection = Backbone.Collection.extend({

    model: App.Violation
  , url:   App.config.proxy.url
  
  , parse: function(response) {
      return response.results.violations;
    }
  
    // Only fetch violations for the given inspection ID
  , queryParams: function(inspectionID) {
      return {
        id: inspectionID
      };
    }

  });
  
  
  
  App.Violations = new ViolationsCollection();
  
  
  
}());
 
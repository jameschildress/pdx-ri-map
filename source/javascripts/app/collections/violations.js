(function(){
  "use strict";



  var ViolationsCollection = Backbone.Collection.extend({

    model: App.Violation
  , url:   App.config.proxy.url
  
  , parse: function(response) {
      return response.results.violations;
    }
  
    // Return the query parameters to be called by fetch()
    // Only fetch violations for the given inspection ID
  , queryParams: function(inspectionID) {
      return {
        id: inspectionID
      };
    }
    
  , fetchByInspectionID: function(inspectionID){
      console.debug("FETCH: Violations");
      this.fetch({
        data: this.queryParams(inspectionID)
      , dataType: App.config.proxy.dataType
      , reset: true
      });
    }

  });
  
  
  
  App.Violations = new ViolationsCollection();
  
  
  
}());
 
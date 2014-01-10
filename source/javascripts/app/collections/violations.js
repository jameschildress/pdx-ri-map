(function(){
  "use strict";



  var ViolationsCollection = Backbone.Collection.extend({

    model: App.Violation
  , url:   App.config.proxy.url
  
  , parse: function(response) {
      // Probably the wrong place to do this, but it works, so...
      // Instantiate the Inspection to which these Violations belong,
      // since the Inspection data is included in the response results
      this.inspection = new App.Inspection(response.results, { parse: true });
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
      this.trigger('fetch', this);
      this.fetch({
        data: this.queryParams(inspectionID)
      , dataType: App.config.proxy.dataType
      , reset: true
      });
    }

  });
  
  
  
  App.Violations = new ViolationsCollection();
  
  
  
}());
 
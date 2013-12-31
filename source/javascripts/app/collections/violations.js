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
      , error: App.utils.ajaxError
      });
    }
    
    // Reset the collection with non-commented and non-correction violations removed
    // This removes compliance notes and leaves only the juicy stuff
  , keepOnlyWithComments: function() {
      var filtered = _.filter(this.models, function(model){
        return model.get('comment').length > 0 && model.get('correction').length > 0;
      });
      this.reset(filtered, { silent: true });
      this.trigger('filter', this);
    }
    
  , initialize: function(){
      this.on('reset', this.keepOnlyWithComments, this);
    }
    

  });
  
  
  
  App.Violations = new ViolationsCollection();
  
  
  
}());
 
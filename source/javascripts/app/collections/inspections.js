(function(){
  "use strict";



  var InspectionsCollection = Backbone.Collection.extend({

    model: App.Inspection
  , url:   App.config.proxy.url

    // Only fetch inspections that occurred within the last year
  , queryParams: function(latitude, longitude) {
      var formatDate = App.utils.formatDate
        , now        = new Date
        , tomorrow   = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
        , yearAgo    = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
      return {
        limit: App.config.resultsLimit
      , to:    formatDate(tomorrow)
      , from:  formatDate(yearAgo)
      , lat:   latitude
      , lng:   longitude
      };
    }

  });
  
  
  
  App.Inspections = new InspectionsCollection();
  
  
  
}());
 
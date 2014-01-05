(function(){
  "use strict";



  var InspectionsCollection = Backbone.Collection.extend({

    model: App.Inspection
  , url:   App.config.proxy.url
  
  , parse: function(response) {
      return response.results;
    }

    // Return the query parameters to be called by fetch()
    // Only fetches inspections that occurred within the last year
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
    
  , fetchByLocation: function(latitude, longitude) {
      console.debug("FETCH: Inspections");
      this.fetch({
        data: this.queryParams(latitude, longitude)
      , dataType: App.config.proxy.dataType
      , reset: true
      });
    }
    
    // Returns an array of the latest inspection for each unique restaurant name
    // Ignore inspections with a score of zero
  , findLatestUniquePerRestaurant: function() {
      var hash = {};
      _.each(this.models, function(inspection){
        var name  = inspection.get('restaurantName')
          , date  = inspection.get('date')
          , score = inspection.get('score');
        if (score && (!hash[name] || date > hash[name].get('date'))) {
          hash[name] = inspection;
        }
      });
      return _.values(hash);
    }

  });
  
  
  
  App.Inspections = new InspectionsCollection();
  
  
  
}());
 
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
        limit:    App.config.proxy.maxResults
      , distance: App.settings.get('searchRadius')
      , to:       formatDate(tomorrow)
      , from:     formatDate(yearAgo)
      , lat:      latitude
      , lng:      longitude
      };
    }
    
  , fetchByLocation: function(latitude, longitude) {
      this.trigger('fetch', this);
      this.fetch({
        data: this.queryParams(latitude, longitude)
      , dataType: App.config.proxy.dataType
      , reset: true
      , error: App.utils.ajaxError
      });
    }
    
    // Reset the collection with only the latest inspection for each unique restaurant name
    // Ignore inspections with a score of zero
  , keepLatestPerRestaurant: function() {
      var hash = {};
      _.each(this.models, function(inspection){
        var name  = inspection.get('restaurantName')
          , date  = inspection.get('date')
          , score = inspection.get('score');
        if (score && (!hash[name] || date > hash[name].get('date'))) {
          hash[name] = inspection;
        }
      });
      this.reset(_.values(hash), { silent: true });
      this.trigger('filter', this);
    }
    
  , initialize: function(){
      this.on('reset', this.keepLatestPerRestaurant, this);
    }

  });
  
  
  
  App.Inspections = new InspectionsCollection();
  
  
  
}());
 
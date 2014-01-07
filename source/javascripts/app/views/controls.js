(function(){
  "use strict";



  App.ControlsView = Backbone.View.extend({
  
    el: '#pdxri-controls'
    
  , collection: App.Inspections
  
  , events: {
      'change #pdxri-sort': 'sortInspections'
    , 'click #pdxri-query': 'queryMap' 
    }
    
  , initialize: function(){
      var self = this;
      
      this.$sorter = this.$('#pdxri-sort');
      this.$queryButton = this.$('#pdxri-query');
      
      this.listenTo(this.collection, 'fetch' , this.pending );
      
      // Enable the query button after the circle has been placed
      google.maps.event.addListener(App.circle, 'center_changed', function(event){
        self.$queryButton.removeAttr('disabled');
      });
    }
    
  , pending: function(){
      // Disable the query button when a query has been fetched
      this.$queryButton.attr('disabled', true);
    }
    
  , sortInspections: function(){
      this.collection.comparator = this.$sorter.val();
      this.collection.sort();
    }
  
  , queryMap: function(){
      var latLng;
      if (App.circle.getMap()) {
        latLng = App.circle.getCenter();
        App.Router.navigate(
          'at/' + latLng.lat() + '/' + latLng.lng()
        , { trigger: true } 
        );
      }
    }
        
  });
 
  
  
}());

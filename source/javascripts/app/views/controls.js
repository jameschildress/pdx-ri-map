(function(){
  "use strict";



  App.ControlsView = Backbone.View.extend({
  
    el: '#pdxri-controls'
    
  , collection: App.Inspections
  
  , events: {
      'change #pdxri-sort':  'sortInspections'
    , 'click #pdxri-query':  'queryMap' 
    , 'click #pdxri-nearby': 'queryNearby' 
    }
    
  , initialize: function(){
      var self = this;
      
      this.$sortMenu     = this.$('#pdxri-sort'  );
      this.$queryButton  = this.$('#pdxri-query' );
      this.$nearbyButton = this.$('#pdxri-nearby');
      
      this.listenTo( this.collection, 'fetch'       , this.pending       );
      this.listenTo( App.Router     , 'route:nearby', this.pending       );
      this.listenTo( this.collection, 'filter'      , this.queryComplete );
      
      // Enable the query button after the circle has been placed
      google.maps.event.addListener(App.circle, 'center_changed', function(event){
        self.$queryButton.removeAttr('disabled');
      });
    }
    
    // Disable buttons while a query is pending
  , pending: function(){
      this.$queryButton.attr( 'disabled', true);
      this.$nearbyButton.attr('disabled', true);
    }

  , queryComplete: function(){
      // Enable the 'nearby' button when the query is done rendering
      this.$nearbyButton.removeAttr('disabled');
    }
    
  , sortInspections: function(){
      this.collection.comparator = this.$sortMenu.val();
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
    
  , queryNearby: function(){
      App.Router.navigate('nearby', { trigger: true });
    }
        
  });
 
  
  
}());

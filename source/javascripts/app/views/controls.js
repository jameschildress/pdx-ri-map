(function(){
  "use strict";



  App.ControlsView = Backbone.View.extend({
  
    el: '#pdxri-controls'
    
  , collection: App.Inspections
  
  , events: {
      'change #pdxri-sort' : 'sortInspections'
    , 'click #pdxri-area'  : 'queryArea' 
    , 'click #pdxri-nearby': 'queryNearby' 
    }
    
  , initialize: function(){
      var self = this;
      
      this.$sortMenu     = this.$('#pdxri-sort'  );
      this.$areaButton   = this.$('#pdxri-area'  );
      this.$nearbyButton = this.$('#pdxri-nearby');
      
      this.listenTo( this.collection, 'fetch'  , this.disableButtons     );
      this.listenTo( App.location   , 'seek'   , this.disableButtons     );
      this.listenTo( this.collection, 'filter' , this.enableNearbyButton );
      this.listenTo( App.location   , 'change' , this.enableAreaButton   );
      this.listenTo( App.settings   , 'change:searchRadius' , this.enableAreaButton );
    }
    
  , disableButtons: function(){
      this.$areaButton.attr( 'disabled', true);
      this.$nearbyButton.attr('disabled', true);
    }
    
  , enableAreaButton: function(){
      this.$areaButton.removeAttr('disabled');
    }

  , enableNearbyButton: function(){
      this.$nearbyButton.removeAttr('disabled');
    }
    
  , sortInspections: function(){
      this.collection.comparator = this.$sortMenu.val();
      this.collection.sort();
    }
  
  , queryArea: function(){
      var latLng = App.location.latLng;
      App.Router.navigate(
        'at/' + latLng.lat() + '/' + latLng.lng()
      , { trigger: true } 
      );
    }
    
  , queryNearby: function(){
      App.Router.navigate('nearby', { trigger: true });
    }
        
  });
 
  
  
}());

(function(){
  "use strict";



  App.ControlsView = Backbone.View.extend({
  
    el: '#pdxri-controls'
    
  , collection: App.Inspections
  
  , events: {
      'change #pdxri-sort'           : 'sortInspections'
    , 'click  #pdxri-area'           : 'queryArea' 
    , 'click  #pdxri-nearby'         : 'queryNearby'
    , 'submit #pdxri-address-search' : 'queryAddress'
    }
    
  , initialize: function() {
      var self = this;
      
      this.$sortMenu     = this.$('#pdxri-sort'   );
      this.$areaButton   = this.$('#pdxri-area'   );
      this.$nearbyButton = this.$('#pdxri-nearby' );
      this.$addressInput = this.$('#pdxri-address');
      
      this.listenTo( this.collection, 'fetch'  , this.disableButtons );
      this.listenTo( App.location   , 'seek'   , this.disableButtons );
      this.listenTo( this.collection, 'filter' , this.enableButtons  );
      this.listenTo( App.location   , 'change' , this.enableButtons  );
      this.listenTo( App.events     , 'error'  , this.enableButtons  );
    }
    
    
    
  , disableButtons: function() {
      this.$areaButton.attr(  'disabled', true);
      this.$nearbyButton.attr('disabled', true);
      this.$addressInput.attr('disabled', true);
    }
    
  , enableButtons: function() {
      if (App.location.latLng) {
        this.$areaButton.removeAttr('disabled');
      }
      this.$nearbyButton.removeAttr('disabled');
      this.$addressInput.removeAttr('disabled');
    }

  , sortInspections: function() {
      this.collection.comparator = this.$sortMenu.val();
      this.collection.sort();
    }
  
  
  
  , queryArea: function() {
      var latLng = App.location.latLng;
      App.Router.navigate(
        'at/' + latLng.lat() + '/' + latLng.lng()
      , { trigger: true } 
      );
    }
    
  , queryNearby: function() {
      App.Router.navigate('nearby', { trigger: true });
    }
    
  , queryAddress: function() {
      App.location.geocode(this.$addressInput.val(), function(latLng) {
        App.Router.navigate(
          'at/' + latLng.lat() + '/' + latLng.lng()
        , { trigger: true } 
        );
      });
      return false;
    }
        
  });
 
  
  
}());

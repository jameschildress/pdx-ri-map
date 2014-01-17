(function(){
  "use strict";



  App.SettingsView = Backbone.View.extend({
  
    el: '#pdxri-main'
  
  , template: function() {
      return $('#pdxri-template-settings').html();
    }
      
  , render: function() {
      this.$el.html(this.template());
    }
    
  , initialize: function() {
      var self = this;
      
      this.listenTo( App.settings , 'change:searchRadius' , this.updateRadiusIndicator )
    
      this.render();
    
      this.$radiusIndicator = this.$el.find( '#pdxri-search-radius-indicator' );
      this.$zoomControl     = this.$el.find( '#pdxri-zoom-toggle'             );
      this.$radiusControl   = this.$el.find( '#pdxri-search-radius'           );

      // Set initial state of zoom control
      this.$zoomControl.attr('checked', App.settings.get('zoomToResults'));
      
      // Set initial state of radius control
      this.$radiusControl.val(App.settings.get('searchRadius'));
      this.updateRadiusIndicator();
      
      // Set 'change' event for zoom control
      this.$zoomControl.on('change', function(){
        App.settings.set('zoomToResults', !App.settings.get('zoomToResults'));
      });
      
      // Set 'change' event for radius control
      this.$radiusControl.on('change', function(){
        App.settings.set('searchRadius', parseFloat(self.$radiusControl.val()));
      });
      
    }
    
    
    
  , updateRadiusIndicator: function() {
      var radius = App.settings.get('searchRadius');
      this.$radiusIndicator.text(radius + ' mile' + (radius == 1 ? '' : 's'));
    }
    
  });
 
  
  
}());

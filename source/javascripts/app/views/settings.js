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
    
      this.render();
    
      this.$radiusIndicator = this.$el.find( '#pdxri-search-radius-indicator' );
      this.$zoomControl     = this.$el.find( '#pdxri-zoom-toggle'             );
      this.$radiusControl   = this.$el.find( '#pdxri-search-radius'           );

      // Set initial state of zoom control
      this.$zoomControl.attr('checked', App.settings.zoomToResults);
      
      // Set initial state of radius control
      this.$radiusControl.val(App.settings.searchRadius);
      this.updateRadiusIndicator();
      
      // Set 'change' event for zoom control
      this.$zoomControl.on('change', function(){
        App.settings.zoomToResults = !App.settings.zoomToResults;
        console.log("SETTING CHANGED: zoom", App.settings.zoomToResults);
      });
      
      // Set 'change' event for radius control
      this.$radiusControl.on('change', function(){
        App.settings.searchRadius = parseFloat(self.$radiusControl.val());
        self.updateRadiusIndicator();
        console.log("SETTING CHANGED: radius", App.settings.searchRadius);
      });
      
    }
    
    
    
  , updateRadiusIndicator: function() {
      var radius = App.settings.searchRadius;
      this.$radiusIndicator.text(radius + ' mile' + (radius == 1 ? '' : 's'));
    }
    
  });
 
  
  
}());

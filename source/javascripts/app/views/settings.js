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
    
  });
 
  
  
}());

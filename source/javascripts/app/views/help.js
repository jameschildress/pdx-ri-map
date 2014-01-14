(function(){
  "use strict";



  App.HelpView = Backbone.View.extend({
  
    el: '#pdxri-main'
    
  , template: function() {
      return $('#pdxri-template-help').html();
    }
      
  , render: function() {
      this.$el.html(this.template());
    }
    
  });
 
  
  
}());

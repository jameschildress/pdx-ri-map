(function(){
  "use strict";



  App.AboutView = Backbone.View.extend({
  
    el: '#pdxri-main'
    
  , template: function() {
      return $('#pdxri-template-about').html();
    }
      
  , render: function() {
      this.$el.html(this.template());
    }
    
  , initialize: function() {
      this.render();
    }
    
    
  });
 
  
  
}());

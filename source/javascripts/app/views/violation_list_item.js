(function(){
  "use strict";



  App.ViolationListItemView = Backbone.View.extend({
  
    tagName:   'div'
    
  , className: 'pdxri-violation'
  
  , template: function() {
      return '<p>' + this.model.escape('lawID') + '<br/>' + this.model.escape('comment') + '</p>';
    }
    
  , render: function() {
      this.$el.html(this.template());
      return this;
    }
  
  });
 
  
  
}());
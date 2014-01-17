(function(){
  "use strict";



  App.ViolationListItemView = Backbone.View.extend({
  
    tagName:   'div'
    
  , className: 'pdxri-violation'
  
  , template: function() {
      var html = '';
      html += '<h4>' + this.model.escape('lawID')   + '</h4>' ;
      html += '<p>'  + this.model.escape('comment') + '</p>'  ;
      return html;
    }
    
  , render: function() {
      this.$el.html(this.template());
    }
    
  , initialize: function() {
      this.render();
    }
  
  });
 
  
  
}());
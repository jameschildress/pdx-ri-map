(function(){
  "use strict";



  App.ErrorMessageView = Backbone.View.extend({
  
    tagName:   'div'
    
  , className: 'pdxri-error'
  
  , template: function() {
      return App.utils.htmlTag('p', this.message);
    }
    
  , render: function() {
      this.$el.html(this.template());
      return this;
    }
    
  , initialize: function(options) {
      this.message = options.message;
      this.render();
    }
  
  });
 
  
  
}());
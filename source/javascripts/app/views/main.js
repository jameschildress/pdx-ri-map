(function(){
  "use strict";



  App.MainView = Backbone.View.extend({
  
    el: '#pdxri-main'

  , initialize: function() {
      this.listenTo( App.Inspections , 'fetch'  , this.pending );
      this.listenTo( App.Violations  , 'fetch'  , this.pending );
      this.listenTo( App.location    , 'seek'   , this.pending );
      this.listenTo( App.location    , 'error'  , this.renderError );
    }
      
  , pending: function() {
      this.$el
        .empty()
        .addClass('pending');
    }
    
  , clear: function() {
      this.$el
        .empty()
        .removeClass('pending');
    }
    
  , renderError: function(message) {
      this.clear();
      this.$el.append(new App.ErrorMessageView({ message: message }).$el);
    }
      
  });
 
  
  
}());

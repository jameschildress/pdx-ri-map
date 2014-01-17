(function(){
  "use strict";



  App.MainView = Backbone.View.extend({
  
    el: '#pdxri-main'

  , initialize: function() {
      this.listenTo( App.Inspections , 'fetch'  , this.pending           );
      this.listenTo( App.Violations  , 'fetch'  , this.pending           );
      this.listenTo( App.Inspections , 'filter' , this.renderInspections );
      this.listenTo( App.Violations  , 'filter' , this.renderViolations  );
      this.listenTo( App.location    , 'seek'   , this.pending           );
      this.listenTo( App.location    , 'error'  , this.renderError       );
    }


    
  , render: function(view) {
      this.$el
        .empty()
        .removeClass('pending')
        .append(view.$el);
    }
        
  , pending: function() {
      this.$el
        .empty()
        .addClass('pending');
    }
    
    
    
    
  , renderError: function(message) {
      this.render( new App.ErrorMessageView({ message: message }) );
    }
    
  , renderInspections: function() {
      this.render( new App.InspectionsListView() );
    }

  , renderViolations: function() {
      this.render( new App.ViolationsListView() );
    }
  
  
  
  });
 
}());

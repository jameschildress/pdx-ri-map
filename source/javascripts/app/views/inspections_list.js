(function(){
  "use strict";



  App.InspectionsListView = Backbone.View.extend({
  
    el: '#pdxri-list'
    
  , collection: App.Inspections
  
  , render: function() {
      var items = _.map(this.collection.models, function(model){
        return new App.InspectionListItemView({ model: model }).render().$el;
      });
      this.$el
        .empty()
        .removeClass('pending')
        .append(items);
      return this;
    }

  , initialize: function() {
      this.listenTo( this.collection , 'fetch'  , this.pending );
      this.listenTo( App.location    , 'seek'   , this.pending );
      this.listenTo( this.collection , 'filter' , this.render  );
      this.listenTo( this.collection , 'sort'   , this.render  );
      this.listenTo( App.location    , 'error'  , this.error   );
    }
      
  , pending: function() {
      this.$el
        .empty()
        .addClass('pending');
    }
    
  , error: function(message) {
      var view = new App.ErrorMessageView({ message: message });
      this.$el
        .empty()
        .removeClass('pending')
        .append(view.render().$el);
    }
      
  });
 
  
  
}());

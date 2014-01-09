(function(){
  "use strict";



  App.InspectionsListView = Backbone.View.extend({
  
    el: '#pdxri-list'
    
  , collection: App.Inspections
  
  , render: function() {
      var listItems = [];
      _.each(this.collection.models, function(inspection){
        var listItemView = new App.InspectionListItemView({ model: inspection });
        listItems.push(listItemView.render().$el);        
      });
      this.$el
        .empty()
        .removeClass('pending')
        .append(listItems);
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
      this.$el
        .removeClass('pending')
        .html('<div class="pdxri-error"><p>' + message + '</p></div>');
    }
      
  });
 
  
  
}());

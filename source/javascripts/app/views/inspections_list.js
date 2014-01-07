(function(){
  "use strict";



  App.InspectionsListView = Backbone.View.extend({
  
    el: '#pdxri-list'
    
  , collection: App.Inspections
  
  , render: function() {
      var listItems = [];
      console.debug('RENDER: InspectionsListView');
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

  , pending: function() {
      this.$el
        .empty()
        .addClass('pending');
    } 
        
  , initialize: function() {
      this.listenTo( this.collection , 'fetch'        , this.pending );
      this.listenTo( App.Router      , 'route:nearby' , this.pending );
      this.listenTo( this.collection , 'filter'       , this.render  );
      this.listenTo( this.collection , 'sort'         , this.render  );
    }
      
  });
 
  
  
}());

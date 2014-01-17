(function(){
  "use strict";



  App.InspectionsListView = Backbone.View.extend({
  
    el: '#pdxri-main'
    
  , collection: App.Inspections
  
  , render: function() {
      var items = _.map(this.collection.models, function(model){
        return new App.InspectionListItemView({ model: model }).$el;
      });
      items.push(new App.InspectionsCountView().$el);
      this.$el
        .empty()
        .removeClass('pending')
        .append(items);
      return this;
    }

  , initialize: function() {
      this.listenTo( this.collection , 'filter' , this.render  );
      this.listenTo( this.collection , 'sort'   , this.render  );
    }
      
  });
 
  
  
}());

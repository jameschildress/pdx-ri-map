(function(){
  "use strict";



  App.InspectionsListView = Backbone.View.extend({
  
    tagName : 'div'
  , id      : 'pdxri-inspections'
    
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
    }

  , initialize: function() {
      this.listenTo( this.collection , 'sort' , this.render );
      this.render();
    }
      
  });
 
  
  
}());

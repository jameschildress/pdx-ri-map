(function(){
  "use strict";



  App.InspectionsListView = Backbone.View.extend({
  
    el: '#pdxri-list'
    
  , collection: App.Inspections
  
  , render: function() {
      var listItems = [];
      console.debug('RENDER: InspectionsListView');
      this.$el.empty();
      _.each(this.collection.models, function(inspection){
        var listItemView = new App.InspectionListItemView({ model: inspection });
        listItems.push(listItemView.render().$el);        
      });
      this.$el.append(listItems);
      return this;
    }
    
  , initialize: function() {
      this.listenTo(this.collection, 'filter', this.render);
      this.listenTo(this.collection, 'sort' , this.render);
    }
  
  });
 
  
  
}());

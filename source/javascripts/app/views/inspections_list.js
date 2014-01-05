(function(){
  "use strict";



  App.InspectionsListView = Backbone.View.extend({
  
    el: '#pdxri-list'
    
  , collection: App.Inspections
    
  , template: function() {
      var inspections = this.collection.findLatestUniquePerRestaurant();
      return _.reduce(inspections, function(memo, inspection){
        var listItemView = new App.InspectionListItemView({ model: inspection });
        return memo + listItemView.render();
      }, '');
    }
  
  , render: function() {
      console.debug('RENDERING: InspectionsListView');
      this.$el.html(this.template());
      return this;
    }
    
  , initialize: function() {
      this.listenTo(this.collection, 'reset', this.render);
    }
  
  });
 
  
  
}());

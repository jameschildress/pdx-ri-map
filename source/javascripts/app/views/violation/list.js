(function(){
  "use strict";



  App.ViolationsListView = Backbone.View.extend({
  
    tagName : 'div'
  , id      : 'pdxri-inspection-details'
    
  , collection: App.Violations
  
  , render: function() {
      var view = new App.InspectionDetailView({ model: this.collection.inspection });
      var items = [view.render().$el];
      _.each(this.collection.models, function(model){
        items.push(new App.ViolationListItemView({ model: model }).$el);
      });
      this.$el
        .empty()
        .removeClass('pending')
        .append(items);
    }

  , initialize: function() {
      this.render();
    }
      
  });
 
  
  
}());

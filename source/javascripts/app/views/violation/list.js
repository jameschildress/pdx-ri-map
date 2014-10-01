(function(){
  "use strict";



  App.ViolationsListView = Backbone.View.extend({
  
    tagName : 'div'
  , id      : 'pdxri-inspection-details'
    
  , collection: App.Violations
  
  , render: function() {
      var view = new App.InspectionDetailView({ model: this.collection.inspection });
      var items = [view.render().$el];
      
      // TODO:
      // - append inspection history heading
      // - append inspection history items
      // - append violations list heading
      
      _.each(this.collection.models, function(model){
        items.push(new App.ViolationListItemView({ model: model }).$el);
      });
      this.$el
        .empty()
        .removeClass('pending')
        .append(items);
      App.events.trigger('render', 'ViolationsListView')
    }

  , initialize: function() {
      this.render();
    }
      
  });
 
  
  
}());

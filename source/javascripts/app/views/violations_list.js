(function(){
  "use strict";



  App.ViolationsListView = Backbone.View.extend({
  
    el: '#pdxri-list'
    
  , collection: App.Violations
  
  , render: function() {
      var view = new App.InspectionDetailView({ model: this.collection.inspection });
      var items = [view.render().$el];
      _.each(this.collection.models, function(model){
        items.push(new App.ViolationListItemView({ model: model }).render().$el);
      });
      this.$el
        .empty()
        .removeClass('pending')
        .append(items);
      return this;
    }

  , initialize: function() {
      this.listenTo( this.collection , 'fetch' , this.pending );
      this.listenTo( this.collection , 'reset' , this.render  );
    }
      
  , pending: function() {
      this.$el
        .empty()
        .addClass('pending');
    }
      
  });
 
  
  
}());

(function(){
  "use strict";



  App.InspectionsCountView = Backbone.View.extend({
  
    el: '#pdxri-count'
    
  , collection: App.Inspections
  
  , template: function() {
      var size = this.collection.length;
      return '<p>' + size + ' result' + (size == 1 ? '' : 's') + '</p>';
    }
  
  , render: function() {
      this.$el.html(this.template());
      return this;
    }

  , pending: function() {
      this.$el.empty();
    }
    
  , initialize: function() {
      this.listenTo( this.collection , 'filter' , this.render  );
      this.listenTo( this.collection , 'fetch'  , this.pending );
      this.listenTo( App.location    , 'seek'   , this.pending );
      this.listenTo( App.Violations  , 'fetch'  , this.pending );
    }
  
  });
 
  
  
}());

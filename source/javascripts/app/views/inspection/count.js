(function(){
  "use strict";



  App.InspectionsCountView = Backbone.View.extend({
  
    el: '#pdxri-count'
    
  , collection: App.Inspections
  
  , template: function() {
      var size = this.collection.length;
      return App.utils.htmlTag('p', size + ' result' + (size == 1 ? '' : 's'));
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
      this.listenTo( App.Router      , 'route'  , this.pending );
    }
  
  });
 
  
  
}());

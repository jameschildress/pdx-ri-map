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
    
  , initialize: function() {
      this.listenTo(this.collection, 'reset', this.render);
    }
  
  });
 
  
  
}());

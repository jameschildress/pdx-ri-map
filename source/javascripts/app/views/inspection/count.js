(function(){
  "use strict";



  App.InspectionsCountView = Backbone.View.extend({
  
    tagName : 'div'
  , id      : 'pdxri-count'
    
  , collection: App.Inspections
  
  , template: function() {
      var size = this.collection.length;
      return App.utils.htmlTag('p', size + ' result' + (size == 1 ? '' : 's'));
    }
  
  , render: function() {
      this.$el.html(this.template());
    }

  , initialize: function() {
      this.render();
    }
  
  });
 
  
  
}());

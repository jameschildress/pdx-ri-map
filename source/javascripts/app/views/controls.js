(function(){
  "use strict";



  App.ControlsView = Backbone.View.extend({
  
    el: '#pdxri-controls'
    
  , collection: App.Inspections
  
  , events: {
     'change #pdxri-sort': 'sortInspections'
    }
    
  , initialize: function(){
      this.$sorter = this.$('#pdxri-sort');
      this.$sorter.trigger('change');
    }
    
  , sortInspections: function(){
      var attr = this.$sorter.val();
      this.collection.comparator = attr;
      this.collection.sort();
    }
        
  });
 
  
  
}());

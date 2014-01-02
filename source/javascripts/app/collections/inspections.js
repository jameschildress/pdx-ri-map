(function(){
  "use strict";



  var InspectionsCollection = Backbone.Collection.extend({

    model: App.Inspection

  });
  
  
  
  App.Inspections = new InspectionsCollection();
  
  
  
}());
 
(function(){
  "use strict";



  var ViolationsCollection = Backbone.Collection.extend({

    model: App.Violation

  });
  
  
  
  App.Violations = new ViolationsCollection();
  
  
  
}());
 
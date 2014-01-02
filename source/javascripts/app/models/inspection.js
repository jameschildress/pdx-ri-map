(function(){
  "use strict";



  App.Inspection = Backbone.Model.extend({
    
    defaults: {
      id:             0
    , restaurantName: ''
    , streetAddress:  ''
    , city:           ''
    , zipCode:        ''
    , latitude:       0
    , longitude:      0
    , type:           ''
    , date:           null
    , score:          0
    }
    
  });
  
  
  
}());

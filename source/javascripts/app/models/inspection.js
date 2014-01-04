(function(){
  "use strict";



  App.Inspection = Backbone.Model.extend({
    
    defaults: {         
      id:               0
    , restaurantName:   ''
    , streetAddress:    ''
    , city:             ''
    , zipCode:          ''
    , latitude:         0
    , longitude:        0
    , type:             ''
    , date:             null
    , score:            0
    }
    
  , parse: function(response) {
      return {
        id:             parseInt(response.inspection_number)
      , restaurantName: response.name.trim()
      , streetAddress:  response.address.street.trim()
      , city:           response.address.city.trim()
      , zipCode:        response.address.zip.trim()
      , latitude:       parseFloat(response.location.Latitude)
      , longitude:      parseFloat(response.location.Longitude)
      , type:           response.type.trim()
      , date:           new Date(response.date)
      , score:          parseInt(response.score)
      };
    }
    
  });
  
  
  
}());

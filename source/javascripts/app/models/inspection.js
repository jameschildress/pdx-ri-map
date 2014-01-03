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


// name: "Acropolis Mcloughlin",
// inspection_number: "9003667",
// restaurant_id: "42",
// type: "FoodSvcSemi",
// date: "2012-10-14",
// score: "90",
// address: {
//     street: "8325 SE Mc Loughlin Blvd",
//     city: "Portland",
//     zip: "97202"
// },
// location: {
//     GISX: "7653323.41801",
//     GISY: "662042.809488",
//     Latitude: "45.462672740",
//     Longitude: "-122.639146744"
// }
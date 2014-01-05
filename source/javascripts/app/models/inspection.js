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
    
  , initialize: function() {
      this.setGrade();
    }
    
    // Set the 'grade' attribute based on the inspection score
  , setGrade: function() {
      var grades = App.config.grades
        , span   = App.config.pointsPerGrade
        , length = grades.length
        , score  = this.get('score')
        , max    = 100
        , min    = max - span
        , i;
      for (i in grades) {
        if (score > min && score <= max) {
          this.set('grade', grades[i]);
          return;
        } else {
          max = min;
          min = max - span;
        }
      }
      this.set('grade', grades[length - 1]);
    }
    
  });
  
  
  
}());

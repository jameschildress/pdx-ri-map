(function(){
  'use strict';



  window.App = {
  
    config: {
    
      map: { 
        divID: 'pdxri-map'
      , options: {
          zoom:    12
        , minZoom: 11
        // , center:  new google.maps.LatLng(45.5278, -122.5702)
        , streetViewControl: false
        }
      }
    
    , proxy: {
        url: 'http://pdxri.childr.es/'
      , dataType: 'jsonp'
      }
      
    , resultsLimit: 500
    
    , grades: ['A', 'B', 'C', 'D', 'F']
    , pointsPerGrade: 5 
  
    }
  };



}());
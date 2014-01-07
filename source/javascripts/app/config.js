(function(){
  'use strict';



  window.App = {
  
    config: {
      
      proxy: {
        url: 'http://pdxri.childr.es/'
      , dataType: 'jsonp'
      , maxResults: 500
      , maxDistance: 0.5
      }
      
    , grades: ['A', 'B', 'C', 'D', 'F']
    , pointsPerGrade: 5
    
    , map: {
        divID: 'pdxri-map'
      , options: {
          zoom:    11
        , minZoom: 11
        , center:  new google.maps.LatLng(45.5278, -122.5702)
        , streetViewControl: false
        }
      }
    }
    
  };



}());
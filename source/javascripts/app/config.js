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
          zoom:    12
        , minZoom: 11
        , center:  new google.maps.LatLng(45.5278, -122.5702)
        , streetViewControl: false
        }
      , circle: {
          radius: 0.5 / 0.00062137  // convert maxDistance to meters
        , strokeOpacity: 0
        , fillColor:     '#0077cc'
        , fillOpacity:   0.4
        }
      }
    }
    
  };



}());
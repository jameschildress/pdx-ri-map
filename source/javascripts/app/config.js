(function(){
  'use strict';



  window.App = {
  
    config: {
    
      map: { 
        divID: 'pdxri-map'
      , options: {
          zoom:    12
        , minZoom: 11
        , center:  new google.maps.LatLng(45.5278, -122.5702)
        , streetViewControl: false
        }
      }
    
    , proxy: {
        url: 'http://pdxri.childr.es/'
      , dataType: 'jsonp'
      }
      
    , resultsLimit: 300
  
    }
  };



  // Use the new Google Maps style
  google.maps.visualRefresh = true;

  // Set the default jQuery.ajax options
  $.ajaxSetup(App.config.proxy);



}());
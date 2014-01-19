(function(){
  'use strict';
  
  
  
  var bounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(45.4146, -122.8501)
  , new google.maps.LatLng(45.6667, -122.4476)
  );
  
  
  
  $.cookie.defaults = {
    expires : 365
  , path    : '/'
  };



  window.App = {
  
    config: {
      
      proxy: {
        url: 'http://pdxri.childr.es/'
      , dataType: 'jsonp'
      , maxResults: 500
      }
      
    , grades: {
        count: 5
      , span:  5  // percentage points per grade
      , max:   100
      }
      
    , settings: {
        zoomToResults: true
      , searchRadius:  0.5 // miles
      }
    
    , map: {
        divID: 'pdxri-map'
      , bounds: bounds
      , overlayURL: 'http://pdxri.childr.es/overlay.xml'
      , options: {
          zoom:    12
        , minZoom: 11
        , center: bounds.getCenter()
        , streetViewControl: false
        }
      , circle: {
          strokeColor:   '#0077cc'
        , strokeOpacity: 1
        , strokeWeight:  1
        , fillColor:     '#0077cc'
        , fillOpacity:   0.05
        }
      , icons: {
          height: 35
        , width:  22
        , count:  6
        , url:    './images/markers.png'
        }
      }
    }
    
  };



}());
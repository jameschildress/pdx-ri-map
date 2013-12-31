(function(){
  'use strict';




  var config = App.config.map.icons
    , count  = config.count
    , size   = new google.maps.Size(config.width, config.height)
    , anchor = new google.maps.Point(config.width / 2, config.height);
    
  App.markerIcons = [];
    
  _.times(6, function(i) {    
    App.markerIcons.push({
      url:    config.url
    , size:   size
    , anchor: anchor 
    , origin: new google.maps.Point(i * config.width, 0)
    });
  });



}());
$(function(){
  'use strict';



  // new google.maps.Map(document.getElementById(App.config.map.divID), App.config.map.options);

  
  
  App.Violations.on('reset', function(Violations){
    console.debug("COLLECTION RESET: Violations")
    console.dir(_.pluck(Violations.models, 'attributes'));    
  });
  
  App.Inspections.on('reset', function(Inspections){
    console.debug("COLLECTION RESET: Inspections")
    console.dir(_.pluck(Inspections.models, 'attributes'));
    console.dir(_.pluck(Inspections.findLatestUniquePerRestaurant(), 'attributes'));
  });  
  

  
  Backbone.history.start();
  
  
  
}());
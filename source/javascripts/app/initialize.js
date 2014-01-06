$(function(){
  'use strict';



  // new google.maps.Map(document.getElementById(App.config.map.divID), App.config.map.options);

  
  
  App.Violations.on('reset', function(Violations){
    console.debug("COLLECTION RESET: Violations")
    console.dir(Violations.models);    
  });
  
  App.Inspections.on('reset', function(Inspections){
    console.debug("COLLECTION RESET: Inspections")
    console.dir(Inspections.models);
    console.dir(Inspections.findLatestUniquePerRestaurant());
  });  
  
  new App.InspectionsListView();
  new App.InspectionsCountView();
  new App.ControlsView();
  
  Backbone.history.start();
  
  
  
}());
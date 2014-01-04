$(function(){
  'use strict';



  // new google.maps.Map(document.getElementById(App.config.map.divID), App.config.map.options);

  
  
  _.each(['Inspections', 'Violations'], function(colName){
    App[colName].on('reset', function(col){
      console.debug("COLLECTION RESET: " + colName)
      console.dir(_.pluck(col.models, 'attributes'));    
    });
  });
  

 
  
  Backbone.history.start();
  
  
  
}());
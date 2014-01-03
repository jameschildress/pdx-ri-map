$(function(){
  'use strict';



  // new google.maps.Map(document.getElementById(App.config.map.divID), App.config.map.options);
  
  new App.Router()
  Backbone.history.start();
  

  App.Inspections.fetch({
    data: App.Inspections.queryParams(45.569653283, -122.663148)
  , dataType: App.config.proxy.dataType
  , reset: true
  , success: function(inspections){
      console.dir(_.pluck(inspections.models, 'attributes'));
    }
  });

  App.Violations.fetch({
    data: App.Violations.queryParams(7204477)
  , dataType: App.config.proxy.dataType
  , reset: true
  , success: function(violations){
      console.dir(_.pluck(violations.models, 'attributes'));
    }
  });

}());
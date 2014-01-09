$(function(){
  'use strict';

  
  
  App.Violations.on('reset', function(Violations){
    console.debug("RESET: Violations")
    console.dir(Violations.models);    
  });

  App.Violations.on('fetch', function(Violations){
    console.debug("FETCH: Violations")
  }); 
  
  App.Inspections.on('reset', function(Inspections){
    console.debug("RESET: Inspections")
    console.dir(Inspections.models);
  });  

  App.Inspections.on('filter', function(Inspections){
    console.debug("FILTER: Inspections")
    console.dir(Inspections.models);
  }); 

  App.Inspections.on('sort', function(Inspections){
    console.debug("SORT: Inspections BY:", Inspections.comparator)
    console.dir(Inspections.models);
  }); 

  App.Inspections.on('fetch', function(Inspections){
    console.debug("FETCH: Inspections");
  });
  
  App.location.on('found', function(latLng){
    var latLng = App.location.latLng;
    console.debug("LOCATION:", latLng.lat(), latLng.lng());
  });
  
  
  
  App.map = new google.maps.Map(
    document.getElementById(App.config.map.divID)
  , App.config.map.options
  );
  App.infoWindow = new google.maps.InfoWindow();
  
  new App.InspectionsListView();
  new App.InspectionsMapView();
  new App.InspectionsCountView();
  new App.ControlsView();
  new App.AreaMapMarkerView();
  
  Backbone.history.start();
  
  
  
}());
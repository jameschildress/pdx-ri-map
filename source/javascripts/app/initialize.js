$(function(){
  'use strict';
  
  
  
  App.map = new google.maps.Map(
    document.getElementById(App.config.map.divID)
  , App.config.map.options
  );
  
  App.infoWindow = new google.maps.InfoWindow();
  
  
  
  new App.InspectionsListView();
  new App.ViolationsListView();
  new App.InspectionsMapView();
  new App.InspectionsCountView();
  new App.ControlsView();
  new App.AreaMapMarkerView();
  
  // TODO: FOR DEVELOPMENT ONLY
  new App.ConsoleView();
  
  
  
  Backbone.history.start();
  
  
  
}());
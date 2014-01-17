$(function(){
  'use strict';
  
  
  
  App.map = new google.maps.Map(
    document.getElementById(App.config.map.divID)
  , App.config.map.options
  );
  
  App.infoWindow = new google.maps.InfoWindow();
  
  
  
  new App.MainView();
  new App.InspectionsMapView();
  new App.ControlsView();
  new App.AreaMapMarkerView();
  new App.MenuView();



  // TODO: FOR DEVELOPMENT ONLY
  new App.ConsoleView();
  
  App.location.initialize();
  
  Backbone.history.start();
  
  
  
}());
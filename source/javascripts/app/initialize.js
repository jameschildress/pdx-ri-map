$(function(){
  'use strict';
  
  
  
  App.map = new google.maps.Map(
    document.getElementById(App.config.map.divID)
  , App.config.map.options
  );
  
  var overlay = new google.maps.KmlLayer({
    clickable: false
  , map: App.map
  , preserveViewport: true
  , suppressInfoWindows: true
  , url: App.config.map.overlayURL
  });
  
  console.log(overlay);
  
  App.infoWindow = new google.maps.InfoWindow();
  
  
  
  new App.MainView();
  new App.ControlsView();
  new App.AreaMapMarkerView();
  new App.MenuView();



  // TODO: FOR DEVELOPMENT ONLY
  new App.ConsoleView();
  
  App.location.initialize();
  
  Backbone.history.start();
  
  
  
}());
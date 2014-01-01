$(function(){
  'use strict';



  new google.maps.Map(document.getElementById(App.config.map.divID), App.config.map.options);
  
  new App.Router();
  
  Backbone.history.start();
  


}());
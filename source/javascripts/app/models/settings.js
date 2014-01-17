(function(){
  "use strict";



  var Settings = Backbone.Model.extend({
    defaults: App.config.settings
  });
  
  
  
  App.settings = new Settings();
  
  
  
}());

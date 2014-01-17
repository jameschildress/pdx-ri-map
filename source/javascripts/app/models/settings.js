(function(){
  "use strict";



  var Settings = Backbone.Model.extend({
    
    defaults: App.config.settings
    
  , initialize: function() {
      this.fetchCookie();
      this.listenTo( this , 'change' , this.setCookie );
    }
    
  , fetchCookie: function() {
      var cookie = $.cookie();
      if (cookie['searchRadius']) {
        this.set('searchRadius', parseFloat(cookie['searchRadius']));
      }
      if (cookie['zoomToResults']) {
        if (cookie['zoomToResults'] === 'true') {
          this.set('zoomToResults', true);
        }
        if (cookie['zoomToResults'] === 'false') {
          this.set('zoomToResults', false);
        }
      }
    }
    
  , setCookie: function() {
      $.cookie( 'zoomToResults' , this.get( 'zoomToResults' ));
      $.cookie( 'searchRadius'  , this.get( 'searchRadius'  ));
    }
  
  });
  
  
  
  App.settings = new Settings();
  
  
  
}());

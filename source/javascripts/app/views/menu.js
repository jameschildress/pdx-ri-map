(function(){
  "use strict";
  
  
  
  var links = ['about', 'help', 'settings']
    , selectorPrefix = '#pdxri-nav-'
    , events = {};
    
  // Generate link-clicking events hash
  _.each(links, function(link){
    events['click ' + selectorPrefix + link] = function(){
      App.Router.navigate(link, { trigger: true });
      return false;
    };
  });



  App.MenuView = Backbone.View.extend({
  
    el: '#pdxri-menu'
    
  , events: events

  , initialize: function(){
    
      this.$links = this.$el.find('a');
      
      this.linksByName = {};      
      _.each(links, function(link){
        this.linksByName[link] = $(selectorPrefix + link);
      }, this);
      
      this.listenTo( App.Router , 'route' , this.setCurrentLink );
      
    }
    
  , setCurrentLink: function(route) {
      this.$links.removeClass('current');
      if (this.linksByName[route]) {
        this.linksByName[route].addClass('current');
      }
    }  
    
  });
 
  
  
}());

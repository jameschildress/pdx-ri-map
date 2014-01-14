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

  , setCurrentLink: function(link) {
      this.$links.removeClass('current');
      this.linksByName[link].addClass('current');
    }
            
  , initialize: function(){
    
      var self = this;
      
      this.$links = this.$el.find('a');
      
      this.linksByName = {};
      
      _.each(links, function(link){
        self.linksByName[link] = $(selectorPrefix + link);
        self.listenTo( App.Router , 'route:' + link , function(){
          self.setCurrentLink(link);
        });
      });
      
    }
    
  });
 
  
  
}());

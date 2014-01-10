(function(){
  "use strict";



  App.InspectionListItemView = Backbone.View.extend({
  
    tagName:   'div'
    
  , className: function(){
      return 'pdxri-list-item grade-' + this.model.grade;
    }
    
  , events: {
      mouseenter : 'focusInspection'
    , mouseleave : 'blurInspection'
    , click      : 'viewDetails'
    }
  
  , template: function() {
      var html = ''
      html += '<h2>' + this.model.escape('restaurantName') + '</h2>';
      html += '<h3>' + this.model.escape('score') + '%</h3>';
      html += '<p>'  + this.model.escape('streetAddress') + '</p>';
      return html;
    }
    
  , render: function() {
      this.$el.html(this.template());
      return this;
    }
    
    
    
  , focusInspection: function() {
      App.events.trigger('inspection:focus', this.model);
    }
    
  , blurInspection: function() {
      App.events.trigger('inspection:blur', this.model);
    }
    
  , viewDetails: function() {
      App.Router.navigate('view/' + this.model.id, { trigger: true });
    }
  
  });
 
  
  
}());
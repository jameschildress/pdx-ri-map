(function(){
  "use strict";



  App.InspectionInfoWindowView = Backbone.View.extend({
  
    tagName:   'div'
    
  , className: function(){
      return 'pdxri-info-window grade-' + this.model.grade;
    }
    
  , events: {
      'click #pdxri-details-link' : 'viewDetails'
    }
  
  , template: function() {
      var html = ''
        , t = App.utils.htmlTag;
      html += t('h2', this.model.escape('restaurantName'));
      html += t('h3', this.model.escape('score') + '%', { class: 'grade' });
      html += t('p' , this.model.escape('streetAddress') );
      html += t('a', 'View inspection details...', { id: 'pdxri-details-link' });
      return html;
    }
    
  , render: function() {
      this.$el.html(this.template());
      return this;
    }
    
  , viewDetails: function() {
      App.Router.navigate('view/' + this.model.id, { trigger: true });
      return false;
    }
  
  });
 
  
  
}());
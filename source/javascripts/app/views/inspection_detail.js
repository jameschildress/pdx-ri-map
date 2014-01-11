(function(){
  "use strict";



  App.InspectionDetailView = Backbone.View.extend({
  
    tagName:   'div'
    
  , className: function(){
      return 'pdxri-detail grade-' + this.model.grade;
    }
  
  , template: function() {
      var t = App.utils.htmlTag
        , html = '';
      html += t('h2', this.model.escape('restaurantName'));
      html += t('p' , this.model.escape('streetAddress') + '<br/>' + this.model.escape('city') + ', OR ' + this.model.escape('zipCode'));
      html += t('h4', 'Latest Inspection');
      html += t('h3', this.model.escape('score') + '%');
      return html;
    }
    
  , render: function() {
      this.$el.html(this.template());
      return this;
    }
  
  });
 
  
  
}());
(function(){
  "use strict";



  App.InspectionDetailView = Backbone.View.extend({
  
    tagName:   'div'
    
  , className: 'pdxri-detail'
  
  , template: function() {
      var html = ''
      html += '<h2>' + this.model.escape('restaurantName') + '</h2>';
      html += '<h3>' + this.model.escape('score') + '%</h3>';
      html += '<p>'  + this.model.escape('streetAddress') +
        '<br/>' + this.model.escape('city') + ', OR ' +
        this.model.escape('zipCode') + '</p>';
      return html;
    }
    
  , render: function() {
      this.$el.html(this.template());
      return this;
    }
  
  });
 
  
  
}());
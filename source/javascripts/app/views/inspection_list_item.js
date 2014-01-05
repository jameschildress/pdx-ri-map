(function(){
  "use strict";



  App.InspectionListItemView = Backbone.View.extend({
  
    tagName:   'div'
    
  , className: function(){
      return 'pdxri-list-item grade-' + this.model.get('grade');
    }
  
  , template: function(inspection) {
      var html = ''
        , attrs = inspection.attributes;
      html += '<h2>' + attrs.restaurantName + '</h2>';
      html += '<h3>' + attrs.score + '%</h3>';
      html += '<p>'  + attrs.streetAddress + '<br/>' + attrs.city + ', OR ' + attrs.zipCode + '</p>';
      return html;
    }
    
  , render: function() {
      this.$el.html(this.template(this.model));
      return this;
    }
  
  });
 
  
  
}());
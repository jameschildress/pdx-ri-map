(function(){
  "use strict";



  App.InspectionDetailView = Backbone.View.extend({
  
    tagName:   'div'
    
  , className: function(){
      return 'pdxri-detail grade-' + this.model.grade;
    }
    
  , events: {
      'click #pdxri-close' : 'returnToLocation'
    }
  
  , template: function() {
      var t = App.utils.htmlTag
        , date = this.model.get('date')
        , html = '';
      if (App.location.historyLatLng) {
        html += t('a',
          t('span', 'close'),
          { id: 'pdxri-close', href: '#', title: 'close' });
      }
      html += t('h2', this.model.escape('restaurantName'));
      html += t('p', 
        this.model.escape('streetAddress') +
        '<br/>' +
        this.model.escape('city') +
        ', OR ' +
        this.model.escape('zipCode')
      );
      html += t('h3',
        'Latest Inspection: ' +
        t('span', this.model.escape('score') + '%', { class: 'grade'})
      );
      html += t('p',
        'Inspected on ' +
        App.utils.monthNames[date.getMonth()] +
        ' ' +
        date.getDate() +
        ', ' +
        date.getFullYear()
      );
      return html;
    }
    
  , render: function() {
      this.$el.html(this.template());
      return this;
    }
    
    
    
  , returnToLocation: function(){
      var latLng = App.location.historyLatLng;
      App.Router.navigate(
        'at/' + latLng.lat() + '/' + latLng.lng()
      , { trigger: true } 
      );
      return false;
    }
  
  });
 
  
  
}());
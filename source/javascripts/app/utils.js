(function(){
  "use strict";



  App.utils = {
    
    // Return a date in the format YYYY-MM-DD
    formatDate: function(date) {
      return [
        date.getFullYear()
      , date.getMonth() + 1
      , date.getDate()
      ].join('-');
    }
    
  , htmlTag: function(tag, content, attr_hash) {
      var html = '';
      if (attr_hash) {
        html += '<' + tag;
        _.each(attr_hash, function(k, v){
          html += ' ' + v + '="' + k + '"';
        });
        html += '>';
      } else {
        html += '<' + tag + '>';
      }
      html += content;
      html += '</' + tag + '>';
      return html;
    }
    
  , ajaxError: function() {
      App.events.trigger(
        'error'
      , 'There was a problem fetching data. Your internet connection may be down.'
      );
    }
    
  , milesToMeters: function(miles) {
      return miles / 0.00062137;
    }
    
  , monthNames: [
      'January'
    , 'February'
    , 'March'
    , 'April'
    , 'May'
    , 'June'
    , 'July'
    , 'August'
    , 'September'
    , 'October'
    , 'November'
    , 'December'
    ]
    
  }
  
  
  
  // Miscellaneous event dispatcher
  App.events = _.clone(Backbone.Events);
  
  
  
}());

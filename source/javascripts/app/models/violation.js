(function(){
  "use strict";



  App.Violation = Backbone.Model.extend({
    
    defaults: {
      lawID:      ''
    , lawText:    ''
    , comment:    ''
    , correction: ''
    }
    
  , parse: function(response) {
      return {
        lawID:      response.law.trim()
      , lawText:    response.violation_rule.trim()
      , comment:    response.violation_comments.trim()
      , correction: response.corrective_text.trim()
      };
    }
    
  });
  
  
  
}());

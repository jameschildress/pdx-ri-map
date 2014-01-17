(function(){
  "use strict";



  App.ViolationMapView = Backbone.View.extend({
  
    collection: App.Violations
    
  , initialize: function() {
      this.marker = null;
    }

  , render: function() {
      var inspection = App.Violations.inspection
        , marker = new App.InspectionMapMarkerView({ model: inspection });
      this.marker = marker.render();
      if (App.settings.get('zoomToResults')) {
        App.map.panTo(inspection.latLng);
      }
      App.events.trigger('render', 'ViolationMapView');
    }



  , removeMarkers: function() {
      if (this.marker) {
        this.marker.hide();
        this.marker = null;
      }
    }



  });
 
}());

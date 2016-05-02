import Ember from 'ember';
import ENV from "client/config/environment";

Ember.$.ajaxSetup({
  xhrFields: {
    withCredentials: true
  }
});

export default Ember.Route.extend({
  model() {
    return Ember.$.get(ENV.NODE_API+'api/v1/playlists')
      .then(function(response){
        return response;
      });
  }
});

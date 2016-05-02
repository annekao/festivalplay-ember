import Ember from 'ember';
import ENV from "client/config/environment";

export default Ember.Route.extend({
  model() {
    return $.get(ENV.NODE_API+'api/v1/playlists')
      .then(function(response){
        return response;
      });
  }
});

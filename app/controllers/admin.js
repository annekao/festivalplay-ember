import Ember from 'ember';
import ENV from "client/config/environment";

Ember.$.ajaxSetup({
  xhrFields: {
    withCredentials: true
  }
});

export default Ember.Controller.extend({
  showLogin: true,
  playlists: [],
  users: [],
  events: [],

  actions: {
    adminLogin() {
      Ember.$.getJSON(ENV.NODE_API + 'api/v1/admin?u='+this.get('username')+'&p='+this.get('password'))
        .then(function(response) {
          if (response.success) {
            this.set('showLogin', false);
            Ember.$.getJSON(ENV.NODE_API+'api/v1/playlists')
              .then(function(response){
                if (!response.success) {
                  this.set('playlists', response);
                } else {
                  this.set('playlists', response.playlists);
                }
              }.bind(this));
            Ember.$.getJSON(ENV.NODE_API+'api/v1/users')
              .then(function(response){
                if (!response.success) {
                  this.set('users', response);
                } else {
                  this.set('users', response.users);
                }
              }.bind(this));
            Ember.$.getJSON(ENV.NODE_API+'api/v1/events')
              .then(function(response){
                if (!response.success) {
                  this.set('events', response);
                } else {
                  this.set('events', response.events);
                }
              }.bind(this));
          } else {
              alert('Invalid credentials.');
          }
      }.bind(this));
    },

    deletePlaylist(playlist_id, index) {
      Ember.$.ajax({
          url: ENV.NODE_API+'api/v1/playlists/'+playlist_id,
          method: 'DELETE'
      }).then(function(response) {
        if(response.success) {
          this.get('playlists')[index] = undefined;
          this.set('playlists', this.get('playlists').compact());
        } else {
          console.log(response);
          alert("Error deleting playlist!");
        }
      }.bind(this));
    },

    deleteUser(user_id, index) {
      Ember.$.ajax({
        url: ENV.NODE_API+'api/v1/users/'+user_id,
        method: 'DELETE'
      }).then(function(response) {
        if(response.success) {
          this.get('users')[index] = undefined;
          this.set('users', this.get('users').compact());

          Ember.$.getJSON(ENV.NODE_API+'api/v1/playlists')
            .then(function(response){
              if (!response.success) {
                this.set('playlists', response);
              } else {
                this.set('playlists', response.playlists);
              }
            }.bind(this));
        } else {
          console.log(response);
          alert("Error deleting user!");
        }
      }.bind(this));
    },

    deleteEvent(event_id, index) {
      Ember.$.ajax({
        url: ENV.NODE_API+'api/v1/events/'+event_id,
        method: 'DELETE'
      }).then(function(response) {
        if(response.success) {
          this.get('events')[index] = undefined;
          this.set('events', this.get('events').compact());

          Ember.$.getJSON(ENV.NODE_API+'api/v1/playlists')
            .then(function(response){
              if (!response.success) {
                this.set('playlists', response);
              } else {
                this.set('playlists', response.playlists);
              }
            }.bind(this));
        } else {
          console.log(response);
          alert("Error deleting event!");
        }
      }.bind(this));
    }
  }
});

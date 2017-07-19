import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('https://datafruits.streampusher.com/djs.json')
    .then(function(response){
      return response.json();
    });
  }
});

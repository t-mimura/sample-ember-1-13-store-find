import Ember from 'ember';

export default Ember.Route.extend({
  model: function(/*params*/) {
    var id = this.modelFor('hoge').id;
    return this.store.findRecord('hoge', id);
  }
});

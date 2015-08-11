import Ember from 'ember';

var previousValue = null;

export default Ember.Route.extend({
  beforeModel: function() {
    previousValue = this.store.adapterFor('hoge').get('isBackgroundReload');
    this.store.adapterFor('hoge').set('isBackgroundReload', true);
  },
  model: function() {
    return this.store.findAll('hoge', {reload: false});
  },
  actions: {
    didTransition: function() {
      this.store.adapterFor('hoge').set('isBackgroundReload', previousValue);
    }
  }
});

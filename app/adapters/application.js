import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  isBackgroundReload: false,

  shouldReloadAll: function(/*store, snapshotRecordArray*/) {
    return false;
  },
  shouldBackgroundReloadAll: function(/*store, snapshotRecordArray*/) {
    return this.get('isBackgroundReload');
  },
  shouldReloadRecord: function(/*store, snapshotRecordArray*/) {
    return false;
  },
  shouldBackgroundReloadRecord: function(/*store, snapshotRecordArray*/) {
    return this.get('isBackgroundReload');
  },
  namespace: 'api'
});

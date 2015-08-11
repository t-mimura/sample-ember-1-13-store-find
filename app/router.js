import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('hoges', function() {
    this.route('no-reload');
    this.route('reload');
    this.route('background-reload');
  });
  this.route('hoge', {path: '/hoges/:id'}, function() {
    this.route('no-reload');
    this.route('reload');
    this.route('background-reload');
  });
});

export default Router;

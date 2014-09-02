App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route("art");
	this.route("photo");
	this.route("design");
	this.route("about");
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', '#544527', 'blue'];
  }
});

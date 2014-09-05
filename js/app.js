App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

 /*ROUTES*/
App.Router.map(function() {
  this.resource("arts");
	this.resource('art', { path: '/products/:title' });
	this.route("photo");
	this.route("design");
	this.route("about");
});

/*CONTROLLERS*/
App.IndexController = Ember.Controller.extend({
	adam: "hello world"
});

/*MODELS*/
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', '#544527', 'blue'];
  }
});

App.ArtsRoute = Ember.Route.extend({
	model: function() {
    return App.ART;
  }
});
App.ArtRoute = Ember.Route.extend({
  model: function(params) {
    return App.ART.findBy('title', params.title); 
  }
});


/*DATA*/
App.ART = [
  {
    title: 'Adin',
    description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
    image: 'images/min.png'
  },
  {
		title: 'Dwa',
		description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
		image: 'images/min.png'
	}
];

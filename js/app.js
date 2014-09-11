App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

 /*ROUTES*/
App.Router.map(function() {
  this.resource("arts");
	this.resource('art', { path: '/art/:title' });
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
  {	id:1,
    title: 'Adin',
    description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
    image: 'images/min.png'
  },
  { id:2,
		title: 'Dwa',
		description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
		image: 'images/min2.png'
	},
	{	id:3,
		title: 'Adin',
		description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
		image: 'images/min.png'
	},
	{	id:4,
		title: 'Adin',
		description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
		image: 'images/min.png'
	},
	{	id:5,
		title: 'Adin',
		description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
		image: 'images/min.png'
	},
	{	id:6,
		title: 'Adin',
		description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
		image: 'images/min.png'
	},
];

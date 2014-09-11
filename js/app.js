App = Ember.Application.create({
	LOG_TRANSITIONS: true
});
/*
* ROUTER
*/
App.Router.map(function() {
  this.resource("arts");
	this.resource('art', { path: '/art/:title' });
	this.route("photo");
	this.route("design");
	this.route("about");
});

/*
 * ROUTES
 */
App.ApplicationRoute = Ember.Route.extend({
  actions: {
    showModal: function(name, content) {
      this.controllerFor(name).set('content', content);
      this.render(name, {
        into: 'application',
        outlet: 'modal'
      });
    },
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.Object.create({ name: 'My name' });
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

/*
 * CONTROLLERS
 */


/*
 * COMPONENTS
 */
App.MyModalComponent = Ember.Component.extend({
  actions: {
    ok: function() {
      this.$('.modal').modal('hide');
      this.sendAction('ok');
    }
  },
  show: function() {
    this.$('.modal').modal().on('hidden.bs.modal', function() {
      this.sendAction('close');
    }.bind(this));
  }.on('didInsertElement')
});

/*
* DATA
*/
App.ART = [
  {	id:1,
    title: 'Adin',
    description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
    image: 'images/min.png',
		photo:'images/obrazek.png'
  },
  { id:2,
		title: 'Dwa',
		description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
		image: 'images/min2.png'
	},
	{	id:3,
		title: 'tRI',
		description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
		image: 'images/min.png'
	},
	{	id:4,
		title: 'Cztery',
		description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
		image: 'images/min.png'
	},
	{	id:5,
		title: 'Piat',
		description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
		image: 'images/min.png'
	},
	{	id:6,
		title: 'Szisc',
		description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
		image: 'images/min.png'
	},
];

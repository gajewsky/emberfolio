App = Ember.Application.create({
	LOG_TRANSITIONS: true
});
/*
* ROUTER
*/
App.Router.map(function() {
  this.resource("arts");
	this.resource('art', { path: '/art/:title' });
	this.resource("photos");
	this.resource('photo', { path: '/photo/:title' });
	this.resource("designs");
	this.resource('design', { path: '/design/:title' });
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

App.PhotosRoute = Ember.Route.extend({
	model: function() {
		return App.PHOTO;
	}
});

App.DesignsRoute = Ember.Route.extend({
	model: function() {
		return App.DESIGN;
	}
});

/*
 * Views
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

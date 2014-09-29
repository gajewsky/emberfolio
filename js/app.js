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
* TODO DRY hovers and other actions
*/
App.ArtsView = Ember.View.extend({
	didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
    	$(".box").hover(function () {
				$(this).find('img').toggleClass('hover');
			});

			$('.box-container').isotope({
				itemSelector: '.box',
				layoutMode: 'fitRows'
			});
    });
  },
  willAnimateIn : function () {
    this.$().css("opacity", 0);
  },

  animateIn : function (done) {
      this.$().fadeTo(300, 1, done);
  },

  animateOut : function (done) {
      this.$().fadeTo(300, 0, done);
  }
});

App.PhotosView = Ember.View.extend({

	didInsertElement : function(){
		this._super();
		Ember.run.scheduleOnce('afterRender', this, function(){
			$(".box").hover(function () {
				$(this).find('img').toggleClass('hover');
			});

			$('.box-container').isotope({
				itemSelector: '.box',
				layoutMode: 'fitRows'
			});

			$('.filters').on( 'click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$('.box-container').isotope({ filter: filterValue });
				$(this).parent().find('button.active').removeClass('active');
      	$(this).addClass('active');
			});
		});
	},
	willAnimateIn : function () {
		this.$().css("opacity", 0);
	},

	animateIn : function (done) {
			this.$().fadeTo(300, 1, done);
	},

	animateOut : function (done) {
			this.$().fadeTo(300, 0, done);
	}
});

App.DesignsView = Ember.View.extend({
	didInsertElement : function(){
		this._super();
		Ember.run.scheduleOnce('afterRender', this, function(){
			$(".box").hover(function () {
				$(this).find('img').toggleClass('hover');
			});

			$('.box-container').isotope({
				itemSelector: '.box',
				layoutMode: 'fitRows'
			});

			$('.filters').on( 'click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$('.box-container').isotope({ filter: filterValue });
				$(this).parent().find('button.active').removeClass('active');
				$(this).addClass('active');
			});
		});
	},
	willAnimateIn : function () {
		this.$().css("opacity", 0);
	},

	animateIn : function (done) {
			this.$().fadeTo(300, 1, done);
	},

	animateOut : function (done) {
			this.$().fadeTo(300, 0, done);
	}
});

App.PDFView = Ember.View.extend({
  tagName: 'iframe',
  attributeBindings: ['src', 'width', 'height', 'frameborder'],
  src: 'klaudiamigaczresume.pdf',
  width: 800,
  height: 600,
  frameborder: 0
});

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

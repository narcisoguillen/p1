P1.Router = Backbone.Router.extend({

  routes: {
    "": "home"
  },

  home: function(){
    this.homeView = new P1.Views.HomeView({
      el: '#container'
    });
  }

});

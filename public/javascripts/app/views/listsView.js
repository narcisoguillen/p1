P1.Views.listsView = Backbone.View.extend({

  initialize: function(){

    this.type1 = new P1.Views.Type1View({
      el: '#type1'
    });

    this.type2 = new P1.Views.Type2View({
      el: '#type2'
    });
  }

});

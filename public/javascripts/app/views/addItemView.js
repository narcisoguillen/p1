P1.Views.addItemView = Backbone.View.extend({

  type: 'type 1', // default type

  events: {
    'click .js-change-type' : 'changeType',
    'keyup #entry'          : 'add'
  },

  initialize: function(){ },

  changeType: function(event){
    var $el = this.$(event.currentTarget);
    this.$el.find('.btn-primary').removeClass('btn-primary').addClass('btn-default');
    $el.addClass('btn-primary').removeClass('btn-default');
    this.type = $el.hasClass('type1') ? 'type 1' : 'type 2';
    this.$el.find('#entry').focus();
  },

  add: function(event){
    var $el = this.$(event.currentTarget);

    if(!$el.val()){ return false; } // Needs to have some text

    if(event.keyCode === 13){

      // Create the new item
      var item = new P1.Models.Item({
        description: $el.val(),
        type:        this.type
      });

      $el.val(''); // Clean up

      console.log(item.toJSON());
    }

  }

});

P1.Views.addItemView = Backbone.View.extend({

  type: 'type 1', // default type

  events: {
    'click .js-change-type' : 'changeType',
    'keyup #entry'          : 'add',
    'keyup #description'    : 'add'
  },

  initialize: function(options){
    this.list1 = options.list1;
    this.list2 = options.list2;
  },

  changeType: function(event){
    var $el = this.$(event.currentTarget);
    this.$el.find('.btn-primary').removeClass('btn-primary').addClass('btn-default');
    $el.addClass('btn-primary').removeClass('btn-default');
    this.type = $el.hasClass('type1') ? 'type 1' : 'type 2';
    this.$el.find('#entry').focus();
  },

  add: function(event){
    if(event.keyCode === 13){

      var $title       = this.$el.find('#entry');
      var $description = this.$el.find('#description');

      if(!$title.val()){ return false; }

      var data = {
        title       : $title.val(),
        description : $description.val(),
        type        : this.type
      };

      // Create the new item
      var item = new P1.Models.Item(data);

      if(this.type === 'type 1'){
        this.list1.add(item);
      }else{
        this.list2.add(item);
      }

      $title.val('');       // Clean up
      $description.val(''); // Clean up
      $title.focus();
    }
  }

});

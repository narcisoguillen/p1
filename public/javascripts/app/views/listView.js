P1.Views.ListView = Backbone.View.extend({

  events: {
    'click .item' : 'select'
  },

  template: _.template(P1.Templates.Type1),

  initialize: function(){
    this.collection.on('add', this.add, this);

    this.$list     = this.$el.find('ul');
    this.$selected = this.$el.find('.jumbotron');
  },

  add: function(item){
    var icon = item.get('type') === 'type 1' ? 'glyphicon-asterisk' : 'glyphicon-plus';
    item.set('id', item.cid); // Use id, save in DB
    item.set('icon', icon);
    this.$list.append(this.template(item.toJSON()));
  },

  select: function(event){
    var $el = this.$(event.currentTarget);
    var id  = $el.attr('data-id');

    this.$el.find('.list-group-item-info').removeClass('list-group-item-info');
    $el.addClass('list-group-item-info');

    this.show(this.collection.get(id));
  },

  show: function(model){
    var data = model.toJSON();
    this.$selected.find('.title').text('Title: ' +  data.title);
    var description = data.description ? 'Description: ' + data.description : '';
    this.$selected.find('.text').text(description);
  }
});


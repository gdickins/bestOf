import $ from 'jquery';
import Backbone from 'backbone';

const PlaceItemView = Backbone.View.extend({
  tagName : 'li',
  className : 'post-item-li',
  template : function() {
    return `
      <h3>
      <a href="#posts/${this.model.get('id')}">${this.model.get('title')}>${this.model.get('title')}</a>
      </h3>
      <img src="${this.model.get('imgurl')}" class="place-item-image" />
      <p class="username">${this.model.get('username')}</p>
    `;
  },
  render : function() {
    this.$el.html(this.template());
  }
});

export default PlaceItemView;

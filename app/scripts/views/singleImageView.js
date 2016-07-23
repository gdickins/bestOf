import $ from 'jquery';
import Backbone from 'backbone';

const SingleImageView = Backbone.View.extend({
  tagName: 'div',
  id: 'image-view',
  template : function() {
    return `
      <h3>
      <a href="#posts/${this.model.get('id')}">${this.model.get('title')}</a>
      </h3>
      <img src="${this.model.get('imgurl')}" class="place-item-image" />
      <p class="username">${this.model.get('user_id')}</p>
      <p class="username">${this.model.get('username')}</p>
    `;
  },
  render : function() {
    this.$el.html(this.template());
  }
});

export default SingleImageView;

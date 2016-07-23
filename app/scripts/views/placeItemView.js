import $ from 'jquery';
import Backbone from 'backbone';

import session from '../models/sessionModel';

const PlaceItemView = Backbone.View.extend({
  tagName : 'li',
  className : 'post-item-li',
  template : function() {
    // console.log(this.model);
    // console.log(session);
    return `
      <h3>
      <a href="#posts/${this.model.get('id')}">${this.model.get('title')}</a>
      </h3>
      <img src="${this.model.get('imgurl')}" class="place-item-image" />
      <p class="username">${session.get('name')}</p>
      <p class="username">${session.get('username')}</p>
    `;
  },
  render : function() {
    this.$el.html(this.template());
  }
});

export default PlaceItemView;

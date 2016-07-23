import $ from 'jquery';
import Backbone from 'backbone';

import session from '../models/sessionModel';
import usersCollection from '../collections/UsersCollection';
import placesCollection from '../collections/PlacesCollection';

const PlaceItemView = Backbone.View.extend({
  tagName : 'li',
  className : 'post-item-li',
  template : function() {

    let userId = this.model.get('user_id');
    let userObj = usersCollection.get({
      url: `https://limitless-falls-88798.herokuapp.com/users/` + userId
    });
    // console.log(userId);

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

export default PlaceItemView;

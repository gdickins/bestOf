import $ from 'jquery';
import Backbone from 'backbone';

import session from '../models/sessionModel';
import usersCollection from '../collections/UsersCollection';
import placesCollection from '../collections/PlacesCollection';

const PlaceView = Backbone.View.extend({
  initialize: function(userId) {
    this.model = placesCollection.get(userId);
    console.log(this.model);
    // this.model.on('change', (model) =>{
    //   this.render();
    // });
  },
  tagName : 'div',
  className : 'place-view',
  template : function() {
    return `
      <h3>${this.model.get('title')}</h3>
      <img src="${this.model.get('imgurl')}" class="place-item-image" />
      <p class="username">${this.model.get('user_id')}</p>
      <p class="username">${this.model.get('username')}</p>
    `;
  },
  render : function() {
    return this.$el.html(this.template());
  }
});

export default PlaceView;

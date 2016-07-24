import $ from 'jquery';
import Backbone from 'backbone';

import session from '../models/sessionModel';
import usersCollection from '../collections/UsersCollection';
import placesCollection from '../collections/PlacesCollection';

const PlaceView = Backbone.View.extend({
  initialize: function(id) {
    console.log(id);
    console.log(this.model);
    this.model = placesCollection.get(id);
    console.log(this);
    this.model.on('change', (response) =>{
      console.log(response);
      // this.render();
    });
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

import $ from 'jquery';
import Backbone from 'backbone';

import session from '../models/sessionModel';
import router from '../router';
import usersCollection from '../collections/UsersCollection';
import placesCollection from '../collections/PlacesCollection';
import PlaceView from './placeView';

const PlaceItemView = Backbone.View.extend({
  tagName : 'li',
  className : 'post-item-li',
  events: {
    'click .place-link' : 'placeRenderFunction'
  },
  placeRenderFunction: function(){
    let placeView = new PlaceView();
    placeView.render();
    $('.container').empty().append(placeView.$el);
    router.navigate(`places/${this.model.get('user_id')}`, {trigger:true});
  },
  template : function() {
    let userId = this.model.get('user_id');
    let userObj = usersCollection.get({
      url: `https://limitless-falls-88798.herokuapp.com/users/` + userId
    });
    return `
      <h3 class="place-link">${this.model.get('title')}</h3>
      <img src="${this.model.get('imgurl')}" class="place-item-image" />
      <p class="username">${this.model.get('user_id')}</p>
      <p class="username">${this.model.get('username')}</p>
    `;
  },
  render : function() {
    return this.$el.html(this.template());
  }
});

export default PlaceItemView;

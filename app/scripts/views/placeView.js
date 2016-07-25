import $ from 'jquery';
import Backbone from 'backbone';

import session from '../models/sessionModel';
import usersCollection from '../collections/UsersCollection';
import placesCollection from '../collections/PlacesCollection';
import PlaceItemView from '../views/placeItemView';

//this.model got changed to sesson. if the login and logout work then change back. but this.model is undefined.
const PlaceView = Backbone.View.extend({
  initialize: function(id) {
    this.model = placesCollection.get(id);
    let userId = this.model.get('user_id');
    if (!usersCollection.get(userId)){
      usersCollection.add({id: userId});
    }

    let user = usersCollection.get(userId);
    user.fetch();
    user.on('change', (response) =>{
      this.render();
      this.model.render();
    });
  },
  events: {
    'click .vote-btn': 'voteFunction'
  },
  voteFunction: function() {
    this.model.vote();
  },
  tagName : 'div',
  className : 'place-view',
  template : function()  {

    let userObj = usersCollection.get(this.model.get('user_id'));
    // console.log(usersCollection);
    console.log(this.model);
    return `
      <h3>${this.model.get('title')}</h3>
      <img src="${this.model.get('imgurl')}" class="place-item-image"/>
      <p>${this.model.get('address')}</p>
      <p class="username">Submitted by: ${userObj.get('name')}, AKA "${userObj.get('username')}"</p>
      <button class="vote-btn">Vote </button><span>${this.model.get('NewRank')}</span>
    `;
  },
  render : function() {
    return this.$el.html(this.template());
  }
});

export default PlaceView;

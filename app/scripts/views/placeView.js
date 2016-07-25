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
    });
  },
  tagName : 'div',
  className : 'place-view',
  template : function()  {

    let userObj = usersCollection.get(this.model.get('user_id'));
    // console.log(usersCollection);
    console.log(userObj);
    return `
      <h3>${this.model.get('title')}</h3>
      <img src="${this.model.get('imgurl')}" class="place-item-image"/>

      <p class="username">${this.model.get('user_id')}</p>
      <p class="username">${userObj.get('username')}</p>
    `;
  },
  render : function() {
    return this.$el.html(this.template());
  }
});

export default PlaceView;

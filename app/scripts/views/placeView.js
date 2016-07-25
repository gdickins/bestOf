import $ from 'jquery';
import Backbone from 'backbone';

import session from '../models/sessionModel';
import usersCollection from '../collections/UsersCollection';
import placesCollection from '../collections/PlacesCollection';
import PlaceItemView from '../views/placeItemView';



//this.model got changed to sesson. if the login and logout work then change back. but this.model is undefined.
const PlaceView = Backbone.View.extend({
  initialize: function(id) {

    // if (!placesCollection.get(id)){
    //   placesCollection.add({id: id});
    // }
    // console.log('test: ', placesCollection.get(id));
    this.model = placesCollection.get(id);
    // console.log(this.model);
    // this.model.fetch();

    // this.model.on('change', (response) =>{
    //   this.render();
    // });

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
    // <p class="username">${this.model.get('user_id')}</p>

    console.log(userObj);
    return `
      <h3># ${this.model.get('user_id')} ${this.model.get('title')}</h3>
      <img src="${this.model.get('imgurl')}" class="place-item-image"/>
      <p class="username"> Posted by: ${userObj.get('username')}</p>
    `;
  },
  render : function() {
    return this.$el.html(this.template());
  }
});

export default PlaceView;

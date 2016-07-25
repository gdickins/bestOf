import $ from 'jquery';
import Backbone from 'backbone';

import session from '../models/sessionModel';
import router from '../router';
import usersCollection from '../collections/UsersCollection';
import placesCollection from '../collections/PlacesCollection';
import PlaceView from './placeView';

const PlaceItemView = Backbone.View.extend({
  initialize: function(){
    //this.model = placesCollection.get(id);
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
  tagName : 'li',
  className : 'post-item-li',
  events: {
    'click .place-link' : 'placeRenderFunction'
  },

  placeRenderFunction: function(){

    $('.container').empty().append('placeView');
    router.navigate(`places/${this.model.get('user_id')}`, {trigger:true});

  },
  template : function() {

      let userObj = usersCollection.get(this.model.get('user_id'));

    return `
      <h3 class="place-link"><span class="number">#${this.model.get('user_id')}</span>  ${this.model.get('title')}</h3>
      <div class="images">
      </div>

      <p class="username">Posted by: ${userObj.get('username')}</p>

      `;
     //return `
    //   <h3 class="place-link">${this.model.get('title')}</h3>
    //   <img src="${this.model.get('imgurl')}" class="place-item-image" />
    //   <p class="username">${this.model.get('user_id')}</p>
    //   <p class="username">${userObj.get('username')}</p>
    // `;

  },
  render : function() {
    // placeRenderFunction();

     this.$el.html(this.template());
    this.$('.images').css('background-image', `url("${this.model.get('imgurl')}")`);
    return this;

  }
});

export default PlaceItemView;

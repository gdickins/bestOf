import $ from 'jquery';
import Backbone from 'backbone';
import router from '../router';
import settings from '../settings';


const UsersCollection = Backbone.Collection.extend({
  model: UserModel,
  url: 'https://limitless-falls-88798.herokuapp.com/users'
});


let user = new UserCollection();

export default userCollection;

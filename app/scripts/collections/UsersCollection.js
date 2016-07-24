import $ from 'jquery';
import Backbone from 'backbone';
import router from '../router';
import settings from '../settings';
import UserModel from '../models/userModel';


const UsersCollection = Backbone.Collection.extend({
  model: UserModel,
  url: 'https://limitless-falls-88798.herokuapp.com/users'
});


let usersCollection = new UsersCollection();

export default usersCollection;

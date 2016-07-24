import $ from 'jquery';
import Backbone from 'backbone';

const UserModel = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: `https://limitless-falls-88798.herokuapp.com/users`,
  defaults: {
    title: '',
    address: '',
    imgurl: '',
    rank: 0
  }
});

export default UserModel;

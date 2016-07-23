import Backbone from 'backbone';
import $ from 'jquery';

import router from '../router';
import session from '../models/sessionModel';
import user from '../models/userModel';


const LoginView = Backbone.View.extend({
  tagName: 'div',
  idName: 'login',
  template: function(){
    return `
      <h2>Login</h2>
      <input type="text" name="email" placeholder="email address">
      <input type="password" name="password" placeholder="password">
      <input type="submit" name="submit" value="login">
      <input type="button" name="cancel" value="cancel">
    `;
  },
  events: {
    'click input[type="submit"]' : 'loginFunction',
  },
  loginFunction: function(evt) {
    evt.preventDefault();
    let email = this.$('input[name="email"]').val();
    let password = this.$('input[name="password"]').val();
    session.login(email, password);
  },
  render: function(){
    return this.$el.html(this.template());
  },

});

export default LoginView;

import Backbone from 'backbone';
import $ from 'jquery';

import router from '../router';
import session from '../models/sessionModel';
import user from '../models/userModel';

const LoginView = Backbone.View.extend({
  tagName: 'div',
  id: 'login',
  template: function(){
    return `
      <h2>Login</h2>
      <input type="text" name="email" placeholder="email address">
      <input type="password" name="password" placeholder="password">
      <input class="button" type="submit" name="submit" value="login">
      <input class="button" type="button" name="signup" value="sign up">
    `;
  },
  events: {
    'click input[type="submit"]' : 'loginFunction',
    'click input[name="signup"]' : 'signupFunction',
  },
  loginFunction: function(evt) {
    evt.preventDefault();
    let email = this.$('input[name="email"]').val();
    let password = this.$('input[name="password"]').val();
    session.login(email, password);
  },
  signupFunction : function(evt) {
    evt.preventDefault();
    router.navigate('signup', {trigger:true});
  },
  render: function(){
    return this.$el.html(this.template());
  },

});

export default LoginView;

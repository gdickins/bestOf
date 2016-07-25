import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import LoginView from './loginView';
import LogoutView from './logoutView';
import SignupView from './signupView';
import MainView from './mainView';

const HeaderView = Backbone.View.extend({
  tagName: 'div',
  id: 'header',
  events: {
    'click .login': 'loginFunction',
    'click .signup': 'signupFunction',
    'click .home': 'homeFunction',
    'click .submit': 'submitFunction'

  },
  loginFunction: function(){
    router.navigate('login', {trigger:true});
  },
  signupFunction: function() {
    router.navigate('signup', {trigger:true});
  },

homeFunction: function(){
  router.navigate('home', {trigger:true});
},

submitFunction: function(){
  router.navigate('submit', {trigger:true});
},

  template: function() {
    return `
      <section class="session-container">
        <button class="login">Login</button>
        <button class="signup">Signup</button>
      </section>
      <nav id="nav">
        <ul>
          <li class="home" id="#home">Home</li>
          <li class="submit" id="#submit">Post</li>

        </ul>
      </nav>
    `;
  },
  render: function() {
    this.$el.html(this.template());
    let logout = new LogoutView();
    logout.render();
    this.$('.session-container').append(logout.$el);
    return this;
  }
});

export default HeaderView;

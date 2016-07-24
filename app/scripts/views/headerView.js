import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import LoginView from './loginView';
import LogoutView from './logoutView';
import SignupView from './signupView';

const HeaderView = Backbone.View.extend({
  tagName: 'div',
  id: 'header',
  events: {
    'click .login': 'loginFunction',
    'click .signup': 'signupFunction'
  },
  loginFunction: function(){
    router.navigate('login', {trigger:true});
  },
  signupFunction: function() {
    router.navigate('signup', {trigger:true});
  },
  template: function() {
    return `
    <div id="header">
      <section class="session-container">
        <button class="login">Login</button>
        <button class="signup">Signup</button>
      </section>
      <nav id="nav">
        <ul>
          <li class="home-li">Home</li>
          <li class="post-li">Post</li>
          <li class="profile-li">Profile</li>
        </ul>
      </nav>
    </div>
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

import $ from 'jquery';
import Backbone from 'backbone';
import router from '../router';
import session from '../models/sessionModel';

const SignupView = Backbone.View.extend({
  initialize: function() {},
  tagName: 'form',
  idName: 'signUp',
  events: {
    'click input[type="submit"]': 'signUpfunction'
  },
  signUpfunction : function(evt) {
    evt.preventDefault();
    let email = this.$('input[name="email"]').val();
    let username = this.$('input[name="username"]').val();
    let password = this.$('input[name="password"]').val();
    // console.log('hi');
    session.save({
      'email' : email,
      'username' : username,
      'password' : password
    }, {
        url : `https://limitless-falls-88798.herokuapp.com/user`,
        success : function(model, response) {
          console.log('model ', model);
          console.log('response ', response);
          model.unset('password');
          // NEED TO ADD A HEADER TO PROPERLY SUBMIT INFO
            window.localStorage.setItem('authtoken', authtoken);
            // router.navigate(`user/${response.id}`, {trigger:true});
            $('input[name="username"]').val('');
            $('input[name="password"]').val('');
            $('input[name="password2"]').val('');
        }
  });
  },

  template: function(){
    return `
      <h2>Sign Up</h2>
      <input type="text" name="email" placeholder="email">
      <input type="text" name="username" placeholder="username">
      <input type="password" name="password" placeholder="password">
      <input type="submit" name="submit" value="login">
      <input type="button" name="cancel" value="cancel">
    `;
  },
  render: function() {
    return this.$el.html(this.template());
  }
});

export default SignupView;

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
    let name = this.$('input[name="name"]').val();
    let username = this.$('input[name="username"]').val();
    let email = this.$('input[name="email"]').val();
    let password = this.$('input[name="password"]').val();
    session.save({
      data: JSON.stringify({
        'name'     : name,
        'username' : username,
        'email'    : email,
        'password' : password
      }),
    }, {
        url : `https://limitless-falls-88798.herokuapp.com/users`,
        // headers: {
        //   Authorization: 'Basic '
        // },
        contentType: 'application/json',
        success : function(model, response) {
          localStorage.removeItem('authtoken');
          localStorage.removeItem('email');
          localStorage.removeItem('name');
          localStorage.removeItem('userId');
          console.log('model ', model);
          console.log('response ', response);
          model.unset('password');
          // NEED TO ADD A HEADER TO PROPERLY SUBMIT INFO
            window.localStorage.setItem('authtoken', authtoken);
            window.localStorage.setItem('email', email);
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('userId', userId);
            router.navigate(`home`, {trigger:true});
            $('input[name="username"]').val('');
            $('input[name="password"]').val('');
            // $('input[name="password2"]').val('');
        }
  });
  },

  template: function(){
    return `
      <h2>Sign Up</h2>
      <input type="text" name="name" placeholder="name">
      <input type="text" name="usename" placeholder="username">
      <input type="text" name="email" placeholder="email">
      <input type="password" name="password" placeholder="password">
      <input type="submit" name="submit" value="submit">
      <input type="button" name="cancel" value="cancel">
    `;
  },
  render: function() {
    return this.$el.html(this.template());
  }
});

export default SignupView;

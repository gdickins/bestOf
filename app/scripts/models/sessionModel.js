import Backbone from 'backbone';

import settings from '../settings';
import router from '../router';

const Session = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: `https://limitless-falls-88798.herokuapp.com/login`,
  defaults: {
      email: '',
      userId: '',
      authtoken: '',
      name: ''
  },
    // this model now successfully has the authtoken from the parse function
    parse: function(response) {
        if (response) {
          return {
            email: response.email,
            userId: response.id,
            authtoken: response.auth_token,
            name : response.name
      };
    }
  },
  login: function(email, password) {
    this.save({
      'email': email,
      'password': password,
    },
    {
        success : (model, response) => {
          window.localStorage.setItem('authtoken', response.auth_token);
          window.localStorage.setItem('email', response.email);
          window.localStorage.setItem('name', response.name);
          window.localStorage.setItem('userId', response.id);
          // model.set('authtoken', response.auth_token);
          // model.set('email', response.email);
          // model.set('name', response.name);
          // model.set('userIt', response.id);
          this.unset('password');
          router.navigate('home', {trigger: true});
        },
        error : function() {
          console.log('ERROR! Check sessionModel.js');
        }
      });
    },
    retrieve: function() {
      session = {
          'authtoken' : localStorage.getItem('authtoken'),
          'email' : localStorage.getItem('email'),
          'name' : localStorage.getItem('name'),
          'userId' : localStorage.getItem('userId'),
      };
      console.log(session);
      return session;
    }
});

let session = new Session();
// console.log(session);

export default session;

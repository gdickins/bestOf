import Backbone from 'backbone';

import settings from '../settings';
import router from '../router';

const Session = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: `https://limitless-falls-88798.herokuapp.com/login`,
  defaults: {
      email: '',
  },
    parse: function(session) {
        if (session) {
          console.log(session);
          return {
            'email': session.email,
            'userId': session.id,
          'authtoken': authtoken
      };

    }
  },
  login: function(email, password) {
    this.save({
      'email': email,
      'password': password
    }, {
        success : (model, response) => {
          window.localStorage.setItem('authtoken', model.attributes.authtoken.auth_token);
          window.localStorage.setItem('userId', model.attributes.authtoken.id);
          window.localStorage.setItem('name', model.attributes.authtoken.name);
          this.unset('password');
          session.unset('password');
          router.navigate('home', {trigger: true});
        },
        error : function() {
          console.log('ERROR! Check sessionModel.js');
        }});
    },
    retrieve: function() {
      let userId = window.localStorage.getItem('userId');
      session.fetch({
        url: `https://limitless-falls-88798.herokuapp.com/users/` + userId
      });
      return session;
    }
});

let session = new Session();
// console.log('session ', session);

export default session;

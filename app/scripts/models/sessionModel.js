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
      'email' : email,
      'password': password,
    },
    {
        success : (model, response) => {



          window.localStorage.setItem('authtoken', model.get('authtoken'));
          window.localStorage.setItem('email', model.get('email'));
          window.localStorage.setItem('name', model.get('name'));
          window.localStorage.setItem('userId', model.get('userId'));
          model.set('authtoken');

          model.unset('password');
          // session.unset('password');

          router.navigate('home', {trigger: true});
        },
        error : function() {
          console.log('ERROR! Check sessionModel.js');
        }
      });
    },
    retrieve: function () {
      session = {
          'authtoken' : localStorage.getItem('authtoken'),
          'email' : localStorage.getItem('email'),
          'name' : localStorage.getItem('name'),
          'userId' : localStorage.getItem('userId'),
      };
      console.log('refreshed session ', session);
      return session;
    }
});

let session = new Session();
// session = session.attributes;
console.log(session);

export default session;

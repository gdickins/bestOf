import Backbone from 'backbone';

import settings from '../settings';
import router from '../router';

const Session = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: `https://limitless-falls-88798.herokuapp.com/login`,
  defaults: {
      email: '',
  },
    parse: function(authtoken) {
        if (authtoken) {
          return {
            // email: response.email,
            // userId: response.id,
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
          // console.log('model ', model);
          // console.log('response ', response);
          window.localStorage.setItem('authtoken', response.auth_token);
          this.unset('password');
          router.navigate('main', {trigger: true});
        },
        error : function() {
          console.log('ERROR! Check sessionModel.js');
        }});
    },
    retrieve: function() {
      console.log(session.fetch(this));
      this.fetch({
        url: `https://limitless-falls-88798.herokuapp.com/users/`
      });
    }
});

let session = new Session();

export default session;

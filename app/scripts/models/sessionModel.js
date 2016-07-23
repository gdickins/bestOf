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
          // console.log(authtoken, ' authtoken');
          return {
            // email: response.email,
            // userId: response.id,
          'authtoken': authtoken
      };
    }
  },
  login: function(email, password) {
    this.save({'email': email, 'password': password}, {
        success : (model, response) => {
          // console.log('model ', model);
          // console.log('response ', response);
          window.localStorage.setItem('authtoken', model.attributes.authtoken.auth_token);
          this.unset('password');
          router.navigate('main', {trigger: true});
        },
        error : function() {
          console.log('ERROR! Check sessionModel.js');
        }});
    }
});

let session = new Session();

export default session;

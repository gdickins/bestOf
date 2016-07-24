import Backbone from 'backbone';

import settings from '../settings';
import router from '../router';

const Session = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: `https://limitless-falls-88798.herokuapp.com/login`,
  defaults: {
      email: '',
  },

    parse: function(model, response) {
        if (response) {
          // console.log(model, response);
          return {
            'email': response.email,
            'userId': response.id,
            'name' : response.name

      };
    }
  },
  login: function(email, password) {
    this.save({
      'email': email,
      'password': password
    }, {
        success : (model, response) => {


          window.localStorage.setItem('authtoken', model.get('authtoken'));
          window.localStorage.setItem('email', model.get('email'));
          window.localStorage.setItem('name', model.get('name'));
          window.localStorage.setItem('userId', model.get('userId'));
          model.set('authtoken');

          model.unset('password');
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

import $ from 'jquery';
import router from '../router';
import Backbone from 'backbone';

import session from '../models/sessionModel';

const LogoutView = Backbone.View.extend({
tagName: 'div',
className: 'logout',
events:{
  'click .logout-btn': 'logoutFunction'
},
logoutFunction: function(evt){
  console.log('session BEFORE', session);
  // let  logoutSession = session.get('attributes');
  evt.preventDefault();
  session.save(null,{
    url: `https://limitless-falls-88798.herokuapp.com/login`,
    success: (model, response) => {
      console.log('success working in logout');
      console.log('model AFTER', model);
      // console.log('session AFTER ', model);
      // console.log('response AFTER', response);
      // model.unset('password');
      // model.unset('authtoken', response.auth_token);
      localStorage.removeItem('authtoken');
      localStorage.removeItem('email');
      localStorage.removeItem('name');
      localStorage.removeItem('userId');
      console.log('User logged out!');
      router.navigate('login', {trigger:true});
    }
  });
},
template: function() {
  return `
    <button class="logout-btn">Logout</button>
  `;
},
render: function() {
  this.$el.html(this.template());
  return this;
}
});


export default LogoutView;

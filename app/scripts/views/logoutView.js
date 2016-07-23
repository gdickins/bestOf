import $ from 'jquery';
import router from '../router';
import Backbone from 'backbone';

import session from '../models/sessionModel';

const LogoutView = Backbone.View.extend({
// tagName: 'div',
className: 'logout',
events:{
  'click .logout-btn': 'logoutFunction'
},
logoutFunction: function(evt){
  evt.preventDefault();
  session.save(null, {
    url: `https://limitless-falls-88798.herokuapp.com/login`,
    success: function(model, response) {
      console.log('model ', model);
      console.log('response ', response);
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

import $ from 'jquery';
import router from '../router';
import Backbone from 'backbone';



const LogoutView = Backbone.View.extend({
tagName: 'div',
className: 'logout',
events:{
  'click.logout-btn': 'logoutFunction'
},
logoutFunction: function(evt){
  evt.preventDefault();
}

});



//
// template: function(){
//   return `
//   <button class="submit">logout</button>
//   `;
// }

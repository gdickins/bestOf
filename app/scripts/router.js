import $ from 'jquery';
import Backbone from 'backbone';

// import placesCollection from './collections/PlacesCollection';
import LoginView from './views/loginView';
import SignupView from './views/signupView';
import MainView from './views/mainView';

const Router = Backbone.Router.extend({
routes: {
  '/*'      : 'loginFunction',
  'login'   : 'loginFunction',
  'signup'  : 'signupFunction',
  // 'logout'  : logoutFunction,
  // 'header'  : headerFunction,
  'main'    : 'mainFunction',
},

loginFunction : function(){
  // console.log('login is running');
  let login = new LoginView();
  login.render();
  $('.container').empty().append(login.$el);
},
signupFunction : function() {
  let signup = new SignupView();
  signup.render();
  $('.container').empty().append(signup.$el);
},
mainFunction  : function() {
  let main = new MainView();
  main.render();
  $('.container').empty().append(main.$el);

},

});


let router = new Router();

export default router;

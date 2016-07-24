import $ from 'jquery';
import Backbone from 'backbone';

import session from './models/sessionModel';
import LoginView from './views/loginView';
import LogoutView from './views/logoutView';
import SignupView from './views/signupView';
import MainView from './views/mainView';
import HeaderView from './views/headerView';

const Router = Backbone.Router.extend({
routes: {
  '/*'      : 'loginFunction',
  'login'   : 'loginFunction',
  'signup'  : 'signupFunction',
  // 'logout'  : logoutFunction,
  'header'  : 'headerFunction',
  'home'    : 'homeFunction',
},

loginFunction : function(){
  let login = new LoginView();
  login.render();
  $('.container').empty().append(login.$el);
},
signupFunction : function() {
  let signup = new SignupView();
  signup.render();
  $('.container').empty().append(signup.$el);
},
homeFunction  : function() {
  let main = new MainView();
  let header = new HeaderView();
  main.render();
  header.render();
  $('.container').empty().append(header.$el).append(main.$el);
  // console.log(session);
},

});


let router = new Router();

export default router;

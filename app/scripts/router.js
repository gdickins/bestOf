import $ from 'jquery';
import Backbone from 'backbone';

import placesCollection from './collections/PlacesCollection';
import session from './models/sessionModel';
import LoginView from './views/loginView';
import LogoutView from './views/logoutView';
import SignupView from './views/signupView';
import MainView from './views/mainView';
import HeaderView from './views/headerView';

const Router = Backbone.Router.extend({
routes: {
  'login'   : 'loginFunction',
  'signup'  : 'signupFunction',
  'header'  : 'headerFunction',
  'home'    : 'homeFunction',
  'places/:id' : 'placeDetailFunction',
  // '/*'      : 'loginFunction',
},

loginFunction : function(){
  placesCollection.off();
  let login = new LoginView();
  login.render();
  $('.container').empty().append(login.$el);
},
signupFunction : function() {
  placesCollection.off();
  let signup = new SignupView();
  signup.render();
  $('.container').empty().append(signup.$el);
},
homeFunction  : function() {
  placesCollection.off();
  let main = new MainView();
  let header = new HeaderView();
  main.render();
  header.render();
  $('.container').empty().append(header.$el).append(main.$el);
  // console.log(session);
},
placeDetailFunction : function(){
  placesCollection.off();
  let header = new HeaderView();
  let placeView = new PlaceView(id);
  header.render();
  placeView.render();
  $('.container').empty().append(header.$el).append(placeView.$el);
}

});


let router = new Router();

export default router;

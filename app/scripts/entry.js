import $ from 'jquery';
import Backbone from 'backbone';

import session from './models/sessionModel';
import router from './router';


Backbone.history.start();

if (localStorage.getItem('authtoken')) {
  session.retrieve();
}

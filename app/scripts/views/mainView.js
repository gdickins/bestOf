import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import PlacesCollection from '../collections/PlacesCollection';

const mainView = Backbone.View.extend({
  initialize: function() {

  },
  tagName: 'div',
  idName: 'main',
  events: {},
  template: function() {
    return `
      <ul class="ul-main">

      </ul>
    `;
  },
  render: function() {}
});

import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import placesCollection from '../collections/PlacesCollection';

const MainView = Backbone.View.extend({
  initialize: function() {
    // placesCollection.on('add', () => {
    //   console.log(this, ' this');
    // });
    console.log(placesCollection.fetch());
    $.ajax({
      type: 'GET',
      url: `https://limitless-falls-88798.herokuapp.com/places`,
      dataType: 'json',
      success: function (response){
        console.log(response);
      }
    });
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
  // render: function() {
  //   this.$el.html(this.template());
  //   return this;
  // }
});

export default MainView;

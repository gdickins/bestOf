import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import placesCollection from '../collections/PlacesCollection';
import PlaceModel from '../models/placeModel';
import PlaceItemView from './placeItemView';

const MainView = Backbone.View.extend({
  initialize: function() {
    placesCollection.on('add', () => {
      this.render();
    });
    placesCollection.fetch(); //undefined...
  },
  tagName: 'div',
  id: 'main',
  events: {},
  template: function() {
    return `
      <ul class="ul-main">
      </ul>
    `;
  },
  render: function() {
    this.$el.html(this.template());

    placesCollection.forEach((place) => {
      let placeItemView = new PlaceItemView({
        model : place
      });
      placeItemView.render();
      this.$('ul').append(placeItemView.$el);
    });
    return this;
  }
});

export default MainView;

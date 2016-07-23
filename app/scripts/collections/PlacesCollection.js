import $ from 'jquery';
import Backbone from 'backbone';
import router from '../router';
import settings from '../settings';


const PlacesCollection = Backbone.Collection.extend({
  model: PlaceModel,
  url: 'https://limitless-falls-88798.herokuapp.com/places'
});


let placesCollection = new PlacesCollection();

default export placesCollection;

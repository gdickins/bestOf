// import $ from 'jquery';
import Backbone from 'backbone';
// import router from '../router';
import PlaceModel from '../models/placeModel';

const PlacesCollection = Backbone.Collection.extend({
  model: PlaceModel,
  url: `https://limitless-falls-88798.herokuapp.com/places`
});


let placesCollection = new PlacesCollection();

export default placesCollection;

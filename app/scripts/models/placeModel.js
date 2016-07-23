import $ from 'jquery';
import Backbone from 'backbone';

const placeModel = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: `https://limitless-falls-88798.herokuapp.com/places`,
  defaults: {
    title: '',
    address: '',
    imgurl: '',
    rank: 0
  },

});

export default placeModel;

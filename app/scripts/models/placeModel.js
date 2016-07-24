import $ from 'jquery';
import Backbone from 'backbone';

const PlaceModel = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: `https://limitless-falls-88798.herokuapp.com/places`,
  defaults: {
    title: '',
    address: '',
    imgurl: '',
    vote: 0
  },
  vote: function () {
    var newRank = this.get('votes') + 1;
    this.set('votes', newVotes);
    this.save();
  }
});

export default PlaceModel;

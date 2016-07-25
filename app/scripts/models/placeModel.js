import $ from 'jquery';
import Backbone from 'backbone';

const PlaceModel = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: `https://limitless-falls-88798.herokuapp.com/places`,
  defaults: {
    title: '',
    address: '',
    imgurl: '',
    rank: 0
  },
  vote: function () {
    var NewRank = this.get('vote_count') + 1;
    this.set('vote_count', NewRank);
    this.save();
    console.log(NewRank);
  }
});

export default PlaceModel;

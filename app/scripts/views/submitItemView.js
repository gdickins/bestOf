import $ from 'jquery';
import Backbone from 'backbone';
import PlacesCollection from '../collections/PlacesCollection';
import router from '../router';
//import MainView from '../views/mainView';
import HeaderView from '../views/headerView';
import PlaceView from '../views/placeView';




const SubmitItemView = Backbone.View.extend({
  tagName: 'div',
  template: function() {
    return `
      <input type="text" name="title" placeholder="Title">
      <input type="text" name="address" placeholder="Address">
      <input type="text" name="imgURL" placeholder="Image URL">
      <input type="button" name="submit" value="Submit">
    `;
  },
  events: {
    'click input[name="submit"]' : 'submitPlaceFunction',
  },
  submitPlaceFunction: function(evt) {
    evt.preventDefault();
    console.log('Event trigger' );
    let title = this.$('input[name="title"]').val();
    let address = this.$('input[name="address"]').val();
    let imgURL = this.$('input[name="imgURL"]').val();
    PlacesCollection.create({
      title: title,
      address: address,
      imgURL: imgURL
    }, {
      success: function() {
        router.navigate('home', {trigger: true});
      }
    });
  },
  render: function() {
    return this.$el.html(this.template());
  },
});

export default SubmitItemView;

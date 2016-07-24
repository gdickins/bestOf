import $ from 'jquery';
import Backbone from 'backbone';
import PlacesCollection from '../collections/PlacesCollection';
import router from '../router';

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
    'click input[type="submit"]' : 'submitPlaceFunction',
  },
  submitPlaceFunction: function(evt) {
    evt.preventDefault();
    console.log('Event trigger');
    let title = this.$('input[name="title"]');
    let address = this.$('input[name="address"]');
    let imgURL = this.$('input[name="imgURL"]');
    postsCollection.create({
      title: title,
      address: address,
      imgURL: imgURL
    }, {
      success: function() {
        router.navigate('main', {trigger: true});
      }
    });
  },
  render: function() {
    return this.$el.html(this.template());
  },
});

export default SubmitItemView;

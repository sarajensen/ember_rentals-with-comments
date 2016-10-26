import Ember from 'ember';

export default Ember.Component.extend({
  // this component gets a new property called updateRentalForm that is instantiated to false on in this Component. When false, the form doesn't show as per conditional logic in the component handlebars.
  updateRentalForm: false,
  actions: {
    // refered to in update-rental.hbs, sets a new property of updateRentalFor, to true
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    update(rental) {
      // params match the properties in our rental objects in our database. These values are sent up through the .sendAction function (That's referenced in update-rental.hbs, then index.hbs, then coded in index.js, since this component is still in the index route.).
      var params = {
        owner = this.get('owner'),
        city = this.get('city'),
        type = this.get('type'),
        image = this.get('image'),
        bedrooms = this.get('bedrooms'),
      };
      // toggles form off
      this.set('updateRentalForm', false);
      // sends the update action up one level, to update-rental.hbs with the rental object we will alter, and the new params we gathered. WE HAVE TO SEND THIS ACTION AGAIN IN RENTAL-TILE.js up to INDEX.js. 
      this.sendAction('update', rental, params);
    }
  }
});

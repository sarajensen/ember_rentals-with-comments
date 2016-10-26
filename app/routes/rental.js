import Ember from 'ember';

export default Ember.Route.extend({
  // remember, model means function. We're passing params in, which we will grab from ....WHERE?
  model(params) {
    // we go to our data store, and findRecord function, which always takes 2 args (type of object and object's id), gets the specific rental we're looking for based on the url (e.g. /rental/2) the user got themselves into.
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
    update(rental, params) {
      // For each key in the params,
      // if it is NOT undefined,
      // take the rental and set the property that matches the current key, to the value of the current key,
      // after looping through all of the keys, save the rental,
      // transition to the index route.
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    // destroyRental is first requested in our rental-tile component. It is referenced in our index.hbs template, and defined here for use in our app.
    destroyRental(rental) {
      //destroyRecord is a pre-named ember funtion that instantly updates the info w/out the deleted record.
      rental.destroyRecord();
      //this is saying to the router: Hey reload this page without the erased object from the model.
      this.transitionTo('index');
    }
  }
});

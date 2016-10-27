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
    },
    // this function saves a review to our DS, and it also saves a review by updating the rental object in our database with the review saved to it. We then have to go "back" to our current page with the new rental object in it.
    saveReview(params) {
      // Create a new review with the information from our parameters, save it to the database, and call it "newReview".
      var newReview = this.store.createRecord('review', params);
      // Refer to the rental in those parameters as "rental".
      var rental = params.rental;
      // Retrieve the list of reviews located in "rental", and add "newReview" to that list.
      rental.get('reviews').addObject(newReview);
      // Save "newReview", so it remembers what rental it belongs in. Wait until "newReview" has finished saving, then save "rental" too, so it remembers it contains "newReview".
      newReview.save().then(function() {
        return rental.save();
      });
      // Afterwards, take us to the page displaying details for "rental".
      this.transitionTo('rental', rental);
    }
  }
});

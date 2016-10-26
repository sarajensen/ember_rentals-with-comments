// Route handlers handle route actions.

import Ember from 'ember';

export default Ember.Route.extend({
  // 'model' means 'function' in Ember. Methods within an Ember class is called a 'model hook'. Model data in a route handler is available to templates and components
  model() {
    // We use an Ember RSVP hash here to load >1 promise, e.g. the two connections with the database we're making here, to gather rental AND review data. It merges mult. promises into one promise. Your program now waits for both promises to be resolved before rendering your templates and components. Woohoo.
    return Ember.RSVP.hash({
      // This.store refers to the Firebase data store we've set up for our app. Then the findAll method with the argument 'rental' instructs Emberdata to find all records of the type rental in the store, and return them to our app. .store and .findAll methods 'understand' pluralization, or that your database store's name will be plural, but that you want all instances of the objects stored in your store.
      rentals: this.store.findAll('rental'),
      reviews: this.store.findAll('review'),
    });
  },
  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      this.transitionTo('index');
    }
  }
});

// Route handlers handle route actions.

import Ember from 'ember';

export default Ember.Route.extend({
  // 'model' means 'function' in Ember. Methods within an Ember class is called a 'model hook'. Model data in a route handler is available to templates and components
  model() {
    // This.store refers to the Firebase data store we've set up for our app. Then the findAll method with the argument 'rental' instructs Emberdata to find all records of the type rental in the store, and return them to our app. .store and .findAll methods 'understand' pluralization, or that your database store's name will be plural, but that you want all instances of the objects stored in your store.
    return this.store.findAll('rental');
  },
  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    // this action is first requested in our rental-tile component. It is referenced in our index.hbs template, and defined here for use in our app.
    destroyRental(rental) {
      //destroyRecord is a pre-named ember funtion that instantly updates the info w/out the deleted record.
      rental.destroyRecord();
      //this is saying to the router: Hey reload this page without the erased object from the model.
      this.transitionTo('index');
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  // remember, model means function. We're passing params in, which we will grab from ....WHERE?
  model(params) {
    // we go to our data store, and findRecord function, which always takes 2 args (type of object and object's id), gets the specific rental we're looking for based on the url (e.g. /rental/2) the user got themselves into.
    return this.store.findRecord('rental', params.rental_id);
  },
});

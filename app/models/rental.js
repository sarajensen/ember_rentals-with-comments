// this file is an Ember data file that will communicate our model data (or user inputs) to firebase -- in a moment.  Below, we will put in a template that connects each of our properties in our rentals constructor.

import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr()
});

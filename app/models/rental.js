// this file is an Ember data file that will communicate our model data (or user inputs) to firebase -- in a moment.  Below, we will put in a template that connects each of our properties in our rentals constructor.

import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  // declaring a one to many relationship with review. Reviews is the many in the one-to-many. Reviews are being store as an attribute of a rental. (Please note that this code doesn't necessarily make the relationship one to many...we know there will be a something-to-many here, but the relationship expressed in review.js defines the relationship too.)
  cost: DS.attr(),
  reviews: DS.hasMany('review', {async: true}),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});

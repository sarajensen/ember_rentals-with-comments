import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  rating: DS.attr(),
  content: DS.attr(),
  // rental is the one in the many in the one-to-many relationship with reviews. See ember docs for more info https://guides.emberjs.com/v2.0.0/models/defining-models/#toc_one-to-one. The rental is being stored in our data store as an attribute of the review.
  rental: DS.belongsTo('rental', {async: true})
});

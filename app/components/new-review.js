import Ember from 'ember';

export default Ember.Component.extend({
  // please stop forgetting this is written like an object, so addNewReview and actions are part of this component's object properties. NO SEMICOLON BETWEEN OBJECT PROPERTIES, ONLY COMMA. ;)
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        content: this.get('content'),
        // since reviews are in a one-to-many relationship with rental, we save a rental to the review property.
        rental: this.get('rental'),
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});

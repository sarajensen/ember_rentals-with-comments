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
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  // Here we're declaring a new computed property called heading, and instructing Ember to combine both the author and rating properties when heading is called. Now, anytime we call {{heading}} in review-tile.hbs, our review's heading will be displayed as a single property:
  heading: Ember.computed('review.author', 'review.rating', function() {
    return this.get('review.author') + ' - ' + this.get('review.rating');
  }),

  actions: {
    delete(review) {
      if (confirm('Are you sure you want to delete this review?')) {
        this.sendAction('destroyReview', review);
      }
    }
  }
});

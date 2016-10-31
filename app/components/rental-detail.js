import Ember from 'ember';

export default Ember.Component.extend({
  // This tells Ember that we'd like to sort our reviews by rating, in descending order. Now, we can call sortedReviews rather than rental.reviews in our rental-detail template to view the newly-ordered reviews for our rental
  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('rental.reviews', 'sortBy'),

  actions: {
    // Delete action is referenced in rental-tile.hbs, and sent up one level to index.js. Index.js codes the delete function since that's where we interact with our database.
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        //sendAction is a pre-written ember function that passes the function "destroyRental" with the rental argument, which is then made available to our template, index.hbs. The index.hbs reference to this sent action can then be accessed by index.js, which will code the action for us to use here. sendAction is like EventEmitter.
        this.sendAction('destroyRental', rental);
      }
    },
    destroyReview(review) {
      this.sendAction('destroyReview', review);
    }
  }
});

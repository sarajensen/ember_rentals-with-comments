import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    // imageShow will set the value of isImageShowing to true, in the Component object here.
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    // This action is sent UP from update-rental.js...and it's on it's merry way to be coded in index.js. 
    update(rental, params) {
      this.sendAction('update', rental, params);
    },
    //this is the function that makes the delete button work.  sendAction and destroyRental will be connected to index.hbs .
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        //sendAction is a pre-written ember function that passes the function "destroyRental" with the rental argument, which is then made available to our template, index.hbs. The index.hbs reference to this sent action can then be accessed by index.js, which will code the action for us to use here. sendAction is like EventEmitter.
        this.sendAction('destroyRental', rental);
      }
    }
  }
});

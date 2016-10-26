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
    }
  }
});

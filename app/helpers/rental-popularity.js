// ember g helper rental-popularity created this file, and the test file.

import Ember from 'ember';


export function rentalPopularity(params/*, hash*/) {
  // Here, we’re grabbing the first item from the parameters (a rental object) and assigning it the variable name rental. Then, we check if the number of reviews for the rental is five or more. If so, we display a Bootstrap glyphicon. If not, nothing happens.
  var rental = params[0];

  if (rental.get('reviews').get('length') >= 5) {
    // Ember.String.htmlSafe(); is a method that allows Ember to render our line of HTML. Ember escapes HTML by default to protect against cross-site scripting vulnerabilities. 
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span');
  }
}

export default Ember.Helper.helper(rentalPopularity);

import Ember from 'ember';
import config from './config/environment';

// Router is an object, with properties location and route.
const Router = Ember.Router.extend({
  location: config.locationType
});

// .map sends the routes to the route property of the Router object
Router.map(function() {
  // about route added by Ember automatically via execution of $ember g route about, also created two files, about.hbs and about.js. Router maps URL to corresponding about route entry. Loads about route handler (e.g. about.js).
  this.route('about');
  // do not have the router.js file OPEN when you generate a route in terminal. It won't show here.
  this.route('contact');
  // add path bit to rental route to add a dynamic segment to the rental routes. This is RESTful (ish?). rental_id in our app represents the id of a given rental in Firebase.
  this.route('rental', {path: '/rental/:rental_id'});
});

export default Router;

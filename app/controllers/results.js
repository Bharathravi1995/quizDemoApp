import Ember from 'ember';

export default Ember.Controller.extend({
    score: function() {
	  var scr = this.store.peekAll('question').filterBy('isCorrect', true).get('length');
	  return scr;
	}.property('@each.isCorrect')

});

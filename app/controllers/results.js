import Ember from 'ember';

export default Ember.Controller.extend({
    score: function() {
	  var scr = this.store.peekAll('question').filterBy('isCorrect', true).get('length');
	  return scr;
	}.property('@each.isCorrect'),
  visited: function() {
    var visitedlength= this.store.peekAll('question').filterBy('freeze', true).get('length');
    return visitedlength;
  }.property('@each.freeze'),
  actions: {
      showAns: function() {
        this.set('isAnswerShowing', true);
      },
      hideAns: function() {
        this.set('isAnswerShowing', false);
      }
    }
});

import Ember from 'ember';

export default Ember.Route.extend({
    model(param){
        single:return this.store.findRecord('question',param.q_id);
        multiple:return this.store.findAll('question');
    },
    actions:{
      nextq(mod,num){
        let record=this.store.peekRecord('question',mod.id);
        record.set('freeze',true);
        this.transitionTo('questions',num+1);
      },
      res(mod){
        let record=this.store.peekRecord('question',mod.id);
        record.set('freeze',true);
        this.transitionTo('results');
      },
      setValue(mod,choice){
        let record=this.store.peekRecord('question',mod.id);
        record.set('inp',choice);
        var iscorrect=(record.get('inp')===record.get('cor'));
        if(iscorrect){
            record.set('isCorrect',true);
          }
        else{
              record.set('isCorrect',false);
            }
          }
    }
});

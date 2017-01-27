import Ember from 'ember';

export default Ember.Route.extend({
    model(param){
        return this.store.findRecord('question',param.q_id);
    },
    actions:{
      nextq(argu){
          this.transitionTo('questions',argu+1);
      },
      res(){
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

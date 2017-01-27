import { Model } from 'ember-cli-mirage';
import DS from 'ember-data';

export default Model.extend({
  num:DS.attr('number'),
  qtn: DS.attr('string'),
  opt:DS.attr(),
  cor: DS.attr(),
  inp:DS.attr(),
  isCorrect:DS.attr('boolean')
});

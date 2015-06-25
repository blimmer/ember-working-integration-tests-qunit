/* global equal */

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('my-container', 'Unit | Component | my container', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  integration: true
});

test('allows changing value', function(assert) {
  this.render(hbs`{{my-container}}`);

  this.$('input').val('foo');
  Ember.run(this.$('input'), 'trigger', 'change');

  equal($('.value').text(), 'foo');
});

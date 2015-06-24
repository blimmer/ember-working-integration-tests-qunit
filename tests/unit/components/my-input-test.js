/* global equal */
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-input', 'Unit | Component | my input', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  integration: true
});

test('it responds to focus events', function(assert) {
  this.render(hbs`{{my-input}}`);
  equal(this.$('input').val(), 'init');

  this.$('input').trigger('focusin');
  equal(this.$('input').val(), 'focusin');

  this.$('input').trigger('focusout');
  equal(this.$('input').val(), 'focusout');
});

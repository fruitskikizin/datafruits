import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('datafruits-chat-input-message', 'Integration | Component | datafruits chat input message', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{datafruits-chat-input-message}}`);

  assert.equal(this.$().text().trim(), 'Send');
});

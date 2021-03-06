import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('shopping-cart/cart-checkout-button', 'Integration | Component | shopping cart/cart checkout button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{shopping-cart/cart-checkout-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#shopping-cart/cart-checkout-button}}
      template block text
    {{/shopping-cart/cart-checkout-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

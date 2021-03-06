import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('shopping-cart/product-list/list-item', 'Integration | Component | shopping cart/product list/list item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{shopping-cart/product-list/list-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#shopping-cart/product-list/list-item}}
      template block text
    {{/shopping-cart/product-list/list-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

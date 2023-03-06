const assert = require('assert');
const app = require('../../src/app');

describe('\'food-recipe\' service', () => {
  it('registered the service', () => {
    const service = app.service('food-recipe');

    assert.ok(service, 'Registered the service (food-recipe)');
  });
});

const hello = require('./Hola');
test('Debe devolver Hola Mundo', () => {
  expect(hello()).toBe('Hola Mundo');
});
